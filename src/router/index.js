import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, StudentView, PaymentView, ErrorView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: ErrorView
    }
  ]
})

export default router
