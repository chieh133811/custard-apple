<script setup lang="ts">
import { RouterLink } from 'vue-router'
import router from '@/router';

const routes = router.getRoutes();
</script>

<template>
    <RouterLink
        v-for="route in routes"
        :to="route.path"
        :key="route.name"
        class="route-link"
    >
        {{ $t(String(route.name)) }}
    </RouterLink>
</template>
