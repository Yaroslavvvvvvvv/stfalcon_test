import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/MyHome.vue';
import MyForm from "@/views/MyForm.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/form', component: MyForm }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;