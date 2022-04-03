import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  
  {
    path: '/read',
    name: 'ReadView',
    component: () => import ('@/views/ReadView/ReadView.vue'),
  },
  {
    path: '/post',
    name: 'PostView',
    component: () => import ('@/views/PostView/PostView.vue'),
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
