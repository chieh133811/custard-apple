import { createI18n } from 'vue-i18n';
import en from '@/locales/en.json';
import zhTW from '@/locales/zh-TW.json';

export const messages = {
    en,
    'zh-TW': zhTW,
};

const i18n = createI18n({
    locale: 'zh-TW', // 預設語言
    fallbackLocale: 'zh-TW', // 當找不到翻譯時使用的語言
    messages
});

export default i18n;
