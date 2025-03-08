<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import i18n from '@/i18n';
import RouteList from '@/components/RouteList.vue';

const navBtnStatus = ref('');
const switchNav = () => {
    navBtnStatus.value = navBtnStatus.value === '' ? 'active' : '';
};
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
                <div :class="['nav-btn-wrap', navBtnStatus]">
                    <button
                        class="nav-btn"
                        @click="switchNav"
                    >
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <div v-if="navBtnStatus === 'active'" class="nav-pop">
                        <RouteList />
                    </div>
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
        padding: 10px 20px;
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
                color: var(--main-text-1);

                &:hover,
                &.router-link-active {
                    color: var(--main-text-hover-1);
                    background-color: var(--hover-bg-1);
                    transition: background-color ease-out 0.3s, color ease-out 0.3s;
                }
            }
        }
        .header-center {
            display: none;
            flex: 1 1 auto;
        }
        .header-choose-lang {
            font-size: 40px;
            color: var(--button-normal);
            transition: color ease-in-out .2s;

            &.current-lang-en {
                color: var(--button-hover);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .page-header {
        .header-wrapper {
            .header-nav {
                display: none;
            }

            .header-center {
                display: flex;
                flex-direction: column;
                align-items: end;
                padding-right: 10px;

                .nav-btn-wrap {
                    position: relative;

                    .nav-btn {
                        font-size: 30px;
                        color: var(--button-normal);

                    }

                    .nav-pop {
                        position: absolute;
                        top: 100%;
                        right: 0;
                        border-radius: 5px;
                        padding: 15px 0;

                        ::v-deep(a) {
                            display: block;
                            padding: 5px 10px;
                            white-space: nowrap;
                            font-size: 16px;
                            color: var(--main-text-hover-1);

                            &:hover {
                                background: var(--hover-bg-1);
                                font-weight: bold;
                            }
                        }
                    }

                    &.active {
                        .nav-btn {
                            color: var(--button-hover);
                        }

                        .nav-pop {
                            background: var(--button-hover);
                        }
                    }
                }
            }
        }
    }
}
</style>
