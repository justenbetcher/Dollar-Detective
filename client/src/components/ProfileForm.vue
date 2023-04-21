<script setup lang="ts">
import { useSession } from '../model/session';

const session = useSession();
</script>

<template>
    <div>
        <p class="label">User ID</p>
        <p class="field">({{ session.user?.userId }})</p>
        <p class="label">Email</p>
        <p class="field">({{ session.user?.email }})</p>
        <button class="button is-danger">
            Delete Account
        </button>
    </div>
</template>

<style scoped>
    
</style>