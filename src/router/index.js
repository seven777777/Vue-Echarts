import Vue from 'vue'
import VueRouter from 'vue-router'

import BaseLayout from '@/layout/BaseLayout';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: BaseLayout,
        children:[
            {
                path: '/home',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
            }
        ]
    }
]

const router = new VueRouter({
  routes,
  // mode:'history'
})

export default router
