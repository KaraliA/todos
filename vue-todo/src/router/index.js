import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../views/ToDo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/todo/:id',
    name: 'ToDoItem',
    component: () => import('../views/ToDoItem.vue')
  },
  {
    path: '/not-existing',
    component: () => import('../views/NotExistsToDoItem.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
