import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Hora oficial de Brasília' },
    },
    {
      path: '/qrCode',
      name: 'qr-code',
      component: () => import('@/views/QrCodeView.vue'),
      meta: { title: 'Doação por QR Code' },
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Hora oficial de Brasília'
})

export default router
