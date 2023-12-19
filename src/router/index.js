// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TitlePage from '@/components/TitlePage.vue'
import BlogPage from '@/components/BlogPage.vue'

const routes = [
    {
        path: '/',
        name: 'TitlePage',
        component: TitlePage
    },
    {
        path: '/blogPage',
        name: 'BlogPage',
        component: BlogPage
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
