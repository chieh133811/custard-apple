import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import zhTW from '@/locales/zh-TW.json';

export const messages = {
    en,
    'zh-TW': zhTW,
};

const cookies: {[key: string]: string } = {};
document.cookie.replace(/\s/, '').split(';').forEach(i => {
    const key = i.split('=')[0];
    const value = i.split('=')[1];
    cookies[key] = value;
});

const locale = Object.keys(messages).includes(cookies.lang) ? cookies.lang : 'zh-TW';
document.cookie = `lang=${locale}`;

const i18n = createI18n({
    legacy: false,
    locale, // 預設語言
    fallbackLocale: 'zh-TW', // 當找不到翻譯時使用的語言
    messages
});

export default i18n;
