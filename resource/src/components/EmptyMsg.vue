<template>
    <div class="empty-msg">
        <div class="empty-middle">
            <div class="icon">
                <FontAwesomeIcon icon="circle-exclamation" />
            </div>
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
        width: 300px;
        text-align: center;
        background: var(--default-bg);
        font-size: 18px;

        .icon {
            padding: 8px 0;
            font-size: 60px;
        }
    }
}
</style>
