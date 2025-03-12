<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import EmptyMsg from '@/components/EmptyMsg.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const activeTab = ref(1);
const options = ref<string[]>([]);
const theInput = ref<HTMLInputElement | null>(null);
const inputValue = ref('');

const { t } = useI18n();
const tabs = [
    { id: 1, name: t('user-defined') },
    { id: 2, name: t('automatic') }
];

function setOption() {
    options.value.push(inputValue.value);
    inputValue.value = '';
    if (theInput.value) {
        theInput.value.focus();
    }
}

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
        setOption();
    }
}
</script>

<template>
    <div class="draw-lots">
        <div class="tab-wrap">
            <div
                v-for="tab in tabs"
                :class="{tab: true, active: activeTab === tab.id}"
                :key="`draw-lots-tab-${tab.id}`"
                @click="activeTab = tab.id"
            >
                {{ tab.name }}
            </div>
            {{ activeTab }}
        </div>
        <div class="user-defined-block">
            <div class="setting-bar">
                <input
                    ref="theInput"
                    v-model="inputValue"
                    type="text"
                    @keydown="handleKeyDown"
                >
                <button @click="setOption">{{ $t('submit') }}</button>
            </div>
            <div v-for="option in options" class="option-box">
                <div class="option-text">{{ option }}</div>
                <button class="edit">
                    <FontAwesomeIcon icon="pencil" />
                </button>
                <button class="delete">
                    <FontAwesomeIcon icon="trash-can" />
                </button>
            </div>
        </div>
    </div>
</template>

<style>
</style>
