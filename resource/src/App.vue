<script setup lang="ts">
import { RouterView } from 'vue-router'
import i18n from '@/i18n';
import RouteList from '@/components/RouteList.vue';

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
            <button :class="['header-choose-lang', `current-lang-${i18n.global.locale}`]" @click="changeLanguage">
                <span class="lang-en">A</span>
                <span class="lang-tw">文</span>
            </button>
        </div>
    </header>
    <RouterView />
    <footer></footer>
</template>

<style lang="scss" scoped>
.page-header {
    position: sticky;
    top: 0;
    background-color: var(--second-bg-1);

    .header-wrapper {
        margin: 0 auto;
        padding: 10px;
        max-width: 1200px;
        display: flex;
        align-items: center;
        gap: 10px;

        .header-logo {
            img {
                display: block;
                width: 283px;
                height: 71px;
            }
        }
        .header-nav {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex: 1 1 auto;
            gap: 2px;

            ::v-deep(a) {
                border-radius: 8px;
                padding: 3px 8px;
                text-align: center;

                &:hover,
                &.router-link-active {
                    color: var(--main-text-1);
                    background-color: var(--main-text-hover-1);
                    transition: background-color ease-out 0.3s, color ease-out 0.3s;
                }
            }
        }
        .header-choose-lang {
            position: relative;
            background: linear-gradient(60deg, rgba(255, 255, 255, .3) 30%, rgba(255, 255, 255, 0)),
                linear-gradient(70deg, var(--button-normal) 0 50%, var(--button-hover) 50% 100%);
            width: 50px;
            height: 40px;
            line-height: 30px;
            border-radius: 20px;

            span {
                position: absolute;
                &:first-child {
                    color: var(--main-text-1);
                    top: 23%;
                    left: 18%;
                    font-family: serif;
                    line-height: normal;
                    font-weight: bold;
                    font-size: 18px;
                }
                &:last-child {
                    color: var(--main-text-1);
                    top: 5%;
                    right: 15%;
                }
            }

            &.current-lang-en {
                background: linear-gradient(60deg, rgba(255, 255, 255, .3) 30%, rgba(255, 255, 255, 0)),
                    linear-gradient(70deg, var(--button-hover) 0 50%, var(--button-normal) 50% 100%);
            }
        }
    }
}
</style>
