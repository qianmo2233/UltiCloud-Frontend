import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vip from "@/views/Vip";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vip',
    name: 'Vip',
    component: Vip
  }
]

const router = new VueRouter({
  routes
})

export default router
