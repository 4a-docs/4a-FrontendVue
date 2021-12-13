import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from'./components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
  path: 'user/login',
  name: 'LogIn',
  component: LogIn
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
