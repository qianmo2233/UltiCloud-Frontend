import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Vip from "@/views/Vip";
import Auth from "@/views/Auth";
import Maker from "@/views/Maker";
import Server from "@/views/Server";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'UltiCloud|主页',
      page: '主页'
    }
  },
  {
    path: '/vip',
    name: 'Vip',
    component: Vip,
    meta: {
      title: 'UltiCloud|会员',
      page: '会员'
    }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      title: 'UltiCloud|授权',
      page: '授权'
    }
  },
  {
    path: '/maker',
    name: 'Maker',
    component: Maker,
    meta: {
      title: 'UltiCloud|制作人员',
      page: '制作人员'
    }
  },
  {
    path: '/server',
    name: 'Server',
    component: Server,
    meta: {
      title: 'UltiCloud|服务器',
      page: '服务器'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = 'UltiCloud'
  }
  next();
})

export default router
