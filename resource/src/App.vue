<script setup lang="ts">
import { RouterView } from 'vue-router';
import PageHeader from '@/components/PageHeader.vue';
</script>

<template>
    <PageHeader />
    <main class="page-main">
        <RouterView />
    </main>
    <footer class="page-footer"></footer>
</template>

<style lang="scss" scoped>
.page-main {
    flex: 1 1 auto;
}
</style>
