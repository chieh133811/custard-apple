<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import EmptyMsg from '@/components/EmptyMsg.vue';
import PopBox from '@/components/PopBox.vue';

const activeTab = ref(1);
const options = ref<string[]>([]);
const optionsEdit = ref<number[]>([]);
const theInput = ref<HTMLInputElement | null>(null);
const inputValue = ref('');
const result = ref('');
const showPopBox = ref(false);

const { t } = useI18n();
const tabs = [
    { id: 1, name: t('user-defined') },
    { id: 2, name: t('automatic') }
];

function setOption() {
    if (!inputValue.value) return;

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

function startDrawingLots() {
    const all = options.value.length;
    if (!all) return;

    result.value = options.value[Math.floor(Math.random() * all)];
    showPopBox.value = true;
}
</script>

<template>
    <div class="draw-lots">
        <div class="tab-wrap">
            <button
                v-for="tab in tabs"
                :class="{tab: true, active: activeTab === tab.id}"
                :key="`draw-lots-tab-${tab.id}`"
                @click="activeTab = tab.id"
            >
                {{ tab.name }}
            </button>
        </div>
        <div v-if="activeTab === 1" class="draw-lots-content">
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
                            icon="check"
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
        </div>
        <div v-if="activeTab === 2" class="draw-lots-content">
            這個還沒寫ฅ(๑*д*๑)ฅ
        </div>
        <button
            :class="{'start-drawing-lots': true, disabled: !options.length}"
            @click="startDrawingLots"
        >
            {{ $t('start-drawing-lots') }}
        </button>
    </div>
    <PopBox v-model:showPopBox="showPopBox">
        <template #pop-content>
            <div class="result-content">
                <div class="result-title">{{ $t('drawing-results') }}</div>
                <div class="drawing-results">{{ result }}</div>
            </div>
        </template>
    </PopBox>
</template>

<style lang="scss" scoped>
.draw-lots {
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: calc(100% - 80px);
    background: var(--second-bg-2);

    .tab-wrap {
        display: flex;
        justify-content: space-between;
        text-align: center;

        .tab {
            border-radius: 10px 10px 0 0;
            padding: 12px 0;
            width: calc(50% - 1px);
            font-size: 22px;
            color: var(--main-text-hover-1);
            background: var(--button-2-not-active);

            &:hover,
            &.active {
                position: relative;
                background: var(--button-2);
            }
            &:hover {
                background: var(--button-2-hover);
            }
            &.active {
                background: var(--button-2);
                color: var(--main-text-1);
            }
        }
    }

    .draw-lots-content {
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        border-radius: 0 0 6px 6px;
        padding: 20px;
        background: var(--button-2);

        .setting-bar {
            display: flex;
            justify-content: space-between;

            .setting-input {
                border-radius: 6px;
                border: 3px solid var(--input-1-border);
                padding-left: 20px;
                width: 75%;
                height: 60px;
                box-sizing: border-box;
                font-size: 22px;
            }

            .setting-btn {
                border-radius: 5px;
                border: 3px solid var(--button-2-border);
                width: 20%;
                background: var(--button-3);
                font-size: 24px;
                color: var(--main-text-1);

                &:hover {
                    background: var(--button-2-border);
                    color: var(--main-text-hover-1);
                }

                &.disabled {
                    background: var(--button-2-disabled);
                    color: var(--main-text-1);
                    cursor: not-allowed;
                }
            }
        }

        .option-box-wrap {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            gap: 10px;
            overflow: auto;
            padding-top: 10px;
            height: calc(100vh - 500px);

            .option-box {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-radius: 5px;
                min-height: 50px;
                padding: 0 10px;
                background: var(--button-3);

                .option-num {
                    border-radius: 20px;
                    border: 3px solid var(--button-normal);
                    width: 28px;
                    height: 28px;
                    line-height: 28px;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                }

                .option-text {
                    padding: 5px 0;
                    font-size: 20px;
                    line-height: 20px;
                    width: calc(100% - 140px);
                    word-wrap: break-word;
                }

                .edit,
                .delete {
                    border-radius: 10px;
                    border: 3px solid var(--button-normal);
                    width: 40px;
                    height: 40px;
                }

                .edit {
                    background: var(--button-4);
                }

                .delete {
                    background: var(--button-5);
                }
            }
        }
    }
    .start-drawing-lots {
        margin-top: 16px;
        border-radius: 40px;
        border: 5px solid var(--main-text-hover-1);
        height: 80px;
        background: var(--button-hover);
        color: var(--main-text-hover-1);
        font-size: 30px;

        &.disabled {
            background: var(--button-2-disabled);
            color: var(--button-2-border);
            cursor: not-allowed;
        }
    }
}

.result-content {
    width: 70vw;
    text-align: center;

    .result-title {
        padding: 20px;
        font-size: 24px;
    }
    .drawing-results {
        padding: 30px;
        font-size: 26px;
        border-radius: 10px;
        background: var(--button-5);
    }
}
</style>
