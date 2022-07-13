import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import FormularioRegistroView from '../views/FormularioRegistroView.vue'
import FormularioMascotasView from '../views/FormularioMascotasView.vue'
import TablaMascotasView from '../views/TablaMascotasView.vue'
import TablaUsuariosView from '../views/TablaUsuariosView.vue'
import FormularioLoginView from '../views/FormularioLoginView.vue'
import BienvenidoView from '../views/BienvenidoView.vue'
import ControlAdminView from '../views/ControlAdminView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/form-register',
    name: 'form-register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FormularioRegistroView
  },
  {
    path: '/form-mascotas',
    name: 'form-mascotas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FormularioMascotasView
  },
  {
    path: '/tabla-mascotas',
    name: 'tabla-mascotas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TablaMascotasView
  },
  {
    path: '/tabla-usuarios',
    name: 'tabla-usuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: TablaUsuariosView
  },
  {
    path: '/formulario-login',
    name: 'formulario-login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FormularioLoginView
  },
  {
    path: '/welcome-page',
    name: 'welcome-page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BienvenidoView
  },
  {
    path: '/control-admin',
    name: 'control-admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ControlAdminView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
