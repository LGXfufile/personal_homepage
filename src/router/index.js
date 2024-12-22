import { createRouter, createWebHistory } from 'vue-router'
import AIAssistant from '../components/AIAssistant.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ai',
      name: 'ai',
      component: AIAssistant
    }
  ]
})

export default router 