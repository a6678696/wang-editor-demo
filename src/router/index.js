import {createRouter, createWebHistory} from 'vue-router'

let history = createWebHistory()
let routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/view/index.vue')
    }
]

export default createRouter({history, routes})
