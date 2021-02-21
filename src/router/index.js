import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/Home";
import Server from "@/views/Server";
import Auth from "@/views/Auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Title_Home',
      icon: 'mdi-home',
    },
  },
  {
    path: '/server',
    name: 'Server',
    component: Server,
    meta: {
      title: 'Title_Server',
      icon: 'mdi-server',
    },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      title: 'Title_Auth',
      icon: 'mdi-key',
    },
  },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes
})

export default router
