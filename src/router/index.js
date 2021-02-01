import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vip from "@/views/Vip";
import Auth from "@/views/Auth";
import Maker from "@/views/Maker";

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
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/maker',
    name: 'Maker',
    component: Maker
  }
]

const router = new VueRouter({
  routes
})


export default router
