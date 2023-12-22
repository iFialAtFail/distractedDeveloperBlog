// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TitlePage from '@/components/TitlePage.vue'
import BlogPage from '@/components/BlogPage.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: TitlePage
    },
    {
        path: '/blog',
        name: 'BlogMain',
        component: TitlePage
    },
    {
        path: '/blog/:blogId',
        name: 'BlogPage',
        component: BlogPage,
        props: true
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
