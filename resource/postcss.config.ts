module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16, // 根元素 font-size，預設為 16px
            propList: ['*'], // 要轉換的 CSS 屬性，'*' 表示全部
            selectorBlackList: [], // 要忽略的 CSS 選擇器
            replace: true, // 是否取代原始 px 單位
            mediaQuery: false, // 是否轉換媒體查詢中的 px 單位
            minPixelValue: 0 // 最小轉換值，小於此值不轉換
        }
    }
};