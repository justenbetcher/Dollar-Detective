<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import PortalView from './views/PortalView.vue';
import { useSession } from './model/session';

const session = useSession();

</script>

<template>
    <div v-if="!session.user">
        <PortalView />
    </div>
    <div v-else>
        <Navbar />
        <RouterView />
    </div>
</template>

<style scoped>

</style>
