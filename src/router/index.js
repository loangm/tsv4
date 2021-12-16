import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Landing2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/vue',
    name: 'Vue',
    component: () => import('../views/Vue.vue')
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
    component: () => import('../views/Vuetify.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
