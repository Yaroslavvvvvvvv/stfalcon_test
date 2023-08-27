import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/MyHome.vue';
import About from '@/views/MyForm.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/form', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;