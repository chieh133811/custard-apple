<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';

defineProps({
    showPopBox: {
        type: Boolean,
        required: true
    }
});
const emits = defineEmits(["update:showPopBox"]);

function closePop() {
    emits("update:showPopBox", false);
}

const route = useRoute()
watch(
    () => route.fullPath,
    () => {
        emits("update:showPopBox", false);
    }
);
</script>

<template>
    <div v-if="showPopBox" class="pop-box">
        <div @click="closePop" class="pop-box-mask"></div>
        <div class="pop-center-block">
            <div class="pop-content">
                <slot name="pop-content"></slot>
            </div>
            <button @click="closePop" class="close-pop">
                <FontAwesomeIcon icon="xmark" />
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pop-box {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;

    .pop-box-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mask);
    }

    .pop-center-block {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        border-radius: 20px;
        border: 2px solid var(--dark-3);
        width: 80%;
        background-color: var(--white-1);
        
        .pop-content {
            padding: 20px;
            max-height: calc(80vh - 140px);
            overflow: auto;

            &::-webkit-scrollbar {
                display: none;
            }
        }

        .close-pop {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -56px;
            border-radius: 50%;
            border: 2px solid var(--dark-3);
            padding: 6px 8px;
            background-color: var(--white-1);
            font-size: 24px;
            color: var(--dark-3);

            &:hover,
            &:active {
                border-color: 2px solid var(--white-1);
                background-color: var(--dark-3);
                color: var(--white-1);
            }
        }
    }
}
</style>
