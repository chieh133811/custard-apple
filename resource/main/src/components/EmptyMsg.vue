<template>
    <div class="empty-msg">
        <div class="empty-middle">
            <img src="@/assets/empty-icon.png" />
            {{ $t('building') }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.empty-msg {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .empty-middle {
        border-radius: 5px;
        padding: 20px 0 30px;
        width: 200px;
        text-align: center;
        background: #E6F2FF;

        img {
            display: block;
            width: 100px;
            height: 100px;
            margin: 0 auto;
        }
    }
}
</style>
