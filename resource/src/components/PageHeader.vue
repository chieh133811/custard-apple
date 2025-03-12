<script setup lang="ts">
import { ref } from 'vue';
import i18n from '@/i18n';
import RouteList from '@/components/RouteList.vue';
import PopBox from '@/components/PopBox.vue';

const showPopBox = ref(false);
const changeLanguage = () => {
    const langSwitch = {
        en: 'zh-TW',
        'zh-TW': 'en'
    };
    i18n.global.locale = langSwitch[i18n.global.locale] as 'en' | 'zh-TW';
};
</script>

<template>
    <header class="page-header">
        <div class="header-wrapper">
            <div class="header-logo">
                <img src="@/assets/logo.png" alt="cyh logo" />
            </div>
            <nav class="header-nav">
                <RouteList />
            </nav>
            <div class="header-center">
                <div :class="{'nav-btn-wrap': true, active: showPopBox}">
                    <button
                        class="nav-btn"
                        @click="showPopBox = true"
                    >
                        <FontAwesomeIcon icon="bars" />
                    </button>
                </div>
            </div>
            <button
                :class="['header-choose-lang', `current-lang-${i18n.global.locale}`]"
                @click="changeLanguage"
            >
                <FontAwesomeIcon icon="language" />
            </button>
        </div>
    </header>
    <PopBox v-model:showPopBox="showPopBox">
        <template #pop-content>
            <RouteList />
        </template>
    </PopBox>
</template>

<style lang="scss" scoped src="@/styles/PageHeader.scss"></style>
