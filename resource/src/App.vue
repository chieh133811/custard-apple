<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router';
import i18n, { messages } from '@/i18n';

const routes = router.getRoutes();
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
                <RouterLink v-for="route in routes" :to="route.path">
                    {{ $t(String(route.name)) }}
                </RouterLink>
            </nav>
            <div class="header-choose-lang">
                <button @click="changeLanguage">A 文</button>
            </div>
        </div>
    </header>
    <RouterView />
    <footer></footer>
</template>

<style lang="scss" scoped>
.page-header {
    position: sticky;
    top: 0;
    background-color: #EEE;

    .header-wrapper {
        margin: 0 auto;
        padding: 10px;
        max-width: 1200px;
        display: flex;
        align-items: center;
        gap: 20px;

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

            a {
                border-radius: 6px;
                width: 60px;
                text-align: center;

                &:hover,
                &.router-link-active {
                    color: #EEE;
                    background-color: #424242;
                    transition: background-color ease-out 0.3s, color ease-out 0.3s;
                }
            }
        }
        .header-choose-lang {}
    }
}
header {
    /* line-height: 1.5;
    max-height: 100vh; */
}

@media (min-width: 1024px) {
}
</style>
