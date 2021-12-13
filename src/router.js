import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import LogIn from'./components/LogIn.vue'
import CrearDoctor from './components/CrearDoctor.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
  path: '/user/login',
  name: 'logIn',
  component: LogIn
},
{
  path: '/admin/CrearDoctor ',
  name: 'crearDoctor',
  component: CrearDoctor
},

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
