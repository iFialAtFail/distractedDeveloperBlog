// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import TitlePage from '@/components/TitlePage.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name: 'TitlePage',
        component: TitlePage
    },
    {
        path: '/helloWorld',
        name: 'Hello',
        component: HelloWorld
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
