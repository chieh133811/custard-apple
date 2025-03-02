<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router';
import i18n, { messages } from '@/i18n';

const routes = router.getRoutes();
const changeLanguage = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const lang = target.value as 'en' | 'zh-TW';
    i18n.global.locale = lang;
};

// import HelloWorld from './components/HelloWorld.vue'
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
                <select @change="changeLanguage">
                    <option
                        v-for="(value, key) in messages"
                        :class="`option-${key}`"
                        :value="key"
                    >
                        {{ key }}
                    </option>
                </select>
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
        padding-top: 10px;
        max-width: 1200px;
        display: flex;
        align-items: center;
        gap: 60px;

        .header-logo {}
        .header-nav {
            flex: 1 1 auto;

            a {
                margin-right: 10px;
                border-radius: 6px;
                padding: 0 20px;

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
