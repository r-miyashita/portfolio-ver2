import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../views/TopView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import WorksView from '@/views/WorksView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'top',
            component: TopView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            // component: () => import('../views/AboutView.vue')
        },
        {
            path: '/skills',
            name: 'skills',
            component: SkillsView
        },
        {
            path: '/works',
            name: 'works',
            component: WorksView
        },
    ]
})

export default router
