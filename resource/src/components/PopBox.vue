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

    .pop-box-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: var(--pop-mask-bg);
    }

    .pop-center-block {
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        border-radius: 20px;
        background: var(--pop-block-bg);
        
        .pop-content {
            padding: 20px;
            min-width: 200px;
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
            bottom: -60px;
            font-size: 40px;
            color: var(--pop-close);
            cursor: pointer;
        }
    }
}
</style>
