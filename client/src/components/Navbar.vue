<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useSession, useLogout } from '../model/session';

const session = useSession();

const isActive = ref(true);
</script>

<template>

    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <p class="nav-app-title">Dollar Detective</p>
            </a>
            <div class="navbar-burger" data-target="navbarExampleTransparentExample" v-bind:class="{ 'is-active' : isActive }" @click="isActive = !isActive">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active' : isActive }">
            <div class="navbar-start">
                <RouterLink to="/" class="navbar-item">
                    Home
                </RouterLink>
                <a class="navbar-item">
                    friends
                </a>
                <a class="navbar-item">
                    global
                </a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <p class="navbar-item" href="#">
                                {{ session.user?.name }}(<a href="#" @click="useLogout()">Log Out</a>)
                            </p>
                        </p>
                        <p class="control">
                            <RouterLink to="/profile" class="button is-dark profile">
                                <span class="icon">
                                    <i class="fas fa-user"></i>
                                </span>
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>

</template>

<style scoped>
    .nav-app-title {
        font-size: 1.5em;
        font-weight: 600;
    }
    .profile {
        border-radius: 50%;
    }

</style>