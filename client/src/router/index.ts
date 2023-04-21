import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
        { path: '/profile', name: 'profile', component: () => import('../views/ProfileView.vue') },
        { path: '/friends', name: 'friends', component: () => import('../views/FriendsView.vue') },
        { path: '/global', name: 'global', component: () => import('../views/GlobalView.vue') }
    ]
})

export default router
