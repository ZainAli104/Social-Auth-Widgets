import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/home.vue'
import login from './components/auth/LogIn.vue'
import signup from './components/auth/SignUp.vue'
import NotFound from './components/404.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/',
        component: login
    },
    {
        path: '/signup',
        component: signup
    },
    {
        name: 'NotFound',
        path: '**',
        component: NotFound
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
