import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/started',
      name: 'Started',
      component: () => import('../views/Started.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/ChooseWallet.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue')
    },
    {
      path: '/law',
      name: 'law',
      component: () => import('../views/Law.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/Privacy.vue')
    },
    {
      path: '/news1',
      name: 'news1',
      component: () => import('../views/news1.vue')
    }
   
  ]
})

export default router
