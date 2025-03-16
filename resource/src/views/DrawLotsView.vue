<script setup lang="ts">
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import PopBox from '@/components/PopBox.vue';

const activeTab = ref(1);
const options = ref<string[]>([]);
const optionsEdit = ref<number[]>([]);
const theInput = ref<HTMLInputElement | null>(null);
const inputValue = ref('');
const result = ref('');
const showPopBox = ref(false);

const tabs = [
    { id: 1, name: 'user-defined' },
    { id: 2, name: 'automatic' }
];

function setOption() {
    if (!inputValue.value && theInput.value) {
        theInput.value.focus();
        return;
    }

    options.value.push(inputValue.value);
    inputValue.value = '';
    if (theInput.value) theInput.value.focus();
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        setOption();
    }
}

function editOption(index: number) {
    if (!options.value[index]) return;

    if (!optionsEdit.value.includes(index)) {
        optionsEdit.value.push(index);
        return;
    }
    optionsEdit.value = optionsEdit.value.filter(i => i !== index);

}

function deleteOption(index: number) {
    options.value.splice(index, 1)
}

function clearDrawingLots() {
    const all = options.value.length;
    if (!all || optionsEdit.value.length) return;
    options.value = [];
}

function startDrawingLots() {
    const all = options.value.length;
    if (!all || optionsEdit.value.length) return;

    result.value = options.value[Math.floor(Math.random() * all)];
    showPopBox.value = true;
}
</script>

<template>
    <div class="draw-lots-top">
        <div class="tab-title">
            {{ $t('draw-lots') }}：
        </div>
        <div class="tab-wrap">
            <button
                v-for="tab in tabs"
                :class="{tab: true, active: activeTab === tab.id}"
                :key="`draw-lots-tab-${tab.id}`"
                @click="activeTab = tab.id"
            >
                {{ $t(tab.name) }}
            </button>
        </div>
    </div>
    <template v-if="activeTab === 1">
        <div class="setting-bar">
            <input
                ref="theInput"
                v-model="inputValue"
                type="text"
                :placeholder="$t('enter-options')"
                class="setting-input"
                @keydown="handleKeyDown"
            >
            <button
                :class="{'setting-btn': true, disabled: !inputValue}"
                @click="setOption"
            >
                {{ $t('submit') }}
            </button>
        </div>
        <div class="option-box-wrap">
            <div v-for="(option, index) in options" class="option-box">
                <div class="option-num">
                    {{ index + 1 }}
                </div>
                <input
                    v-if="optionsEdit.includes(index)"
                    v-model="options[index]"
                    :placeholder="$t('enter-options')"
                    class="option-edit-input"
                    type="text"
                >
                <div v-else class="option-text">{{ option }}</div>
                <button
                    :class="{edit: true, disabled: !option}"
                    @click="editOption(index)"
                >
                    <FontAwesomeIcon
                        v-if="optionsEdit.includes(index)"
                        :icon="!option ? 'ban' : 'check'"
                    />
                    <FontAwesomeIcon
                        v-else
                        icon="pencil"
                    />
                    </button>
                <button
                    class="delete"
                    @click="deleteOption(index)"
                >
                    <FontAwesomeIcon icon="trash-can" />
                </button>
            </div>
        </div>
    </template>
    <div v-if="activeTab === 2">
        這個還沒寫ฅ(๑*д*๑)ฅ
    </div>
    <div class="operate-btn-wrap">
        <button
            :class="{
                'clear-drawing-lots': true,
                disabled: !options.length || optionsEdit.length
            }"
            @click="clearDrawingLots"
        >
            {{ $t('clear-drawing-lots') }}
        </button>
        <button
            :class="{
                'start-drawing-lots': true,
                disabled: !options.length || optionsEdit.length
            }"
            @click="startDrawingLots"
        >
            {{ $t('start-drawing-lots') }}
        </button>
    </div>
    <PopBox v-model:showPopBox="showPopBox">
        <template #pop-content>
            <div class="result-content">
                <div class="result-top">
                    <span class="result-title">{{ $t('drawing-results') }}</span>
                </div>
                <div class="drawing-results">{{ result }}</div>
            </div>
        </template>
    </PopBox>
</template>

<style lang="scss" scoped>
$height-draw-lots-top: 60px;
$height-setting-bar: 60px;
$height-operate-btn-wrap: 60px;
$height-option-box-wrap: calc(100% - $height-draw-lots-top - $height-setting-bar - $height-operate-btn-wrap);

.draw-lots-top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $height-draw-lots-top;
    align-self: center;

    .tab-title {
        position: relative;
        padding-right: 10px;
        font-size: 20px;

        &::after {
            position: absolute;
            left: 50%;
            transform: translateX(-75%);
            z-index: -1;
            content: '';
            border-radius: 40%;
            width: 60%;
            height: 24px;
            background-color: var(--blue-1);
        }
    }

    .tab-wrap {
        display: inline-flex;
        justify-content: center;
        text-align: center;
        border-radius: 20px;
        border: 2px solid var(--dark-1);

        .tab {
            border-radius: 20px;
            padding: 6px 18px;
            font-size: 18px;

            &.active {
                background-color: var(--blue-1);
            }

            &:hover {
                background-color: var(--blue-2);
            }
        }
    }
}

.setting-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    height: $height-setting-bar;

    .setting-input {
        border-radius: 6px;
        border: 2px solid var(--dark-1);
        padding: 0 20px;
        width: 75%;
        height: 52px;
        box-sizing: border-box;
        font-size: 20px;
    }

    .setting-btn {
        border-radius: 6px;
        border: 2px solid var(--dark-1);
        width: 24%;
        height: 52px;
        background-color: var(--green-1);
        font-size: 20px;

        &:hover,
        &:active {
            background-color: var(--green-2);
        }

        &.disabled {
            cursor: not-allowed;
            background-color: var(--gray-3);
        }
    }
}

.option-box-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 18px;
    height: $height-option-box-wrap;
    box-sizing: border-box;
    overflow: auto;

    .option-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 30px;
        border: 2px solid var(--dark-3);
        padding: 4px 10px;

        .option-num {
            border-radius: 20px;
            border: 2px solid var(--dark-3);
            background-color: var(--white-1);
            width: 28px;
            height: 28px;
            line-height: 28px;
            font-weight: bold;
            text-align: center;
        }

        .option-edit-input,
        .option-text {
            padding: 5px 0;
            line-height: 20px;
            padding: 0 10px;
            width: calc(100% - 140px);
            word-wrap: break-word;
            box-sizing: border-box;
            font-size: 20px;
            line-height: 20px;
        }

        .option-edit-input {
            border-radius: 5px;
            height: 40px;
            border: 2px solid var(--dark-3);
        }

        .edit,
        .delete {
            border-radius: 10px;
            border: 2px solid var(--dark-3);
            width: 40px;
            height: 40px;
            font-size: 22px;

            svg {
                display: inline-block;
            }
        }

        .edit {
            background-color: var(--blue-1);

            &:hover,
            &:active {
                background-color: var(--blue-2);
            }
        }

        .delete {
            background-color: var(--red-1);

            &:hover,
            &:active {
                background-color: var(--red-2);
            }
        }

        .edit.disabled,
        .delete.disabled {
            cursor: not-allowed;
            background: var(--gray-3);
        }
    }
}

.operate-btn-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    height: $height-operate-btn-wrap;

    .clear-drawing-lots,
    .start-drawing-lots {
        border-radius: 6px;
        border: 2px solid var(--dark-3);
        padding: 0 20px;
        width: 49%;
        height: 56px;
    }
    .clear-drawing-lots {
        background-color: var(--red-1);

        &:hover,
        &:active {
            background-color: var(--red-2);
        }
    }
    .start-drawing-lots {
        background-color: var(--green-1);

        &:hover,
        &:active {
            background-color: var(--green-2);
        }
    }
    .clear-drawing-lots.disabled,
    .start-drawing-lots.disabled {
        cursor: not-allowed;
        background-color: var(--gray-3);
    }
}

.result-content {
    text-align: center;

    .result-top {
        padding: 20px 0;

        .result-title {
            position: relative;
            margin: 0 auto;
            font-size: 22px;
    
            &::after {
                position: absolute;
                left: 50%;
                transform: translateX(-56%);
                z-index: -1;
                content: '';
                border-radius: 40%;
                width: 60%;
                height: 24px;
                background-color: var(--blue-1);
            }
        }
    }
    .drawing-results {
        padding: 20px 0;
        border-radius: 10px;
        border: 2px solid var(--dark-3);
        background-color: var(--white-2);
        font-size: 20px;
        word-wrap: break-word;
    }
}
</style>
