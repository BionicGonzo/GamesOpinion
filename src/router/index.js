import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpinionesView from '../views/OpinionesView.vue'
import AdministracionView from '../views/AdministracionView.vue'
import EdicionView from '../views/EdicionView.vue'
import NotFoundView from '../views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: OpinionesView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdministracionView
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFoundView
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: EdicionView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
