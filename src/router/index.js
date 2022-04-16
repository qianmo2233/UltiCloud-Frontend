import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthMain from "@/views/Auth/AuthMain";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import DashboardMain from "@/views/Dashboard/DashboardMain";
import Home from "@/views/Dashboard/Home";
import NotFound from "@/views/NotFound";
import ServerMain from "@/views/Dashboard/Server/ServerMain";
import ProMain from "@/views/Dashboard/Pro/ProMain";
import AccountMain from "@/views/Dashboard/Account/AccountMain";
import Profile from "@/views/Dashboard/Account/Profile";
import Style from "@/views/Dashboard/Account/Style";
import Tools from "@/views/Dashboard/Tools";
import TwoStepAuth from "@/views/Dashboard/Account/TwoStepAuth";

Vue.use(VueRouter)

const routes = [
  {
    redirect: '/dashboard/home',
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardMain,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: {
          icon: 'mdi-home'
        }
      },
      {
        path: 'server',
        name: 'Servers',
        component: ServerMain,
        meta: {
          icon: 'mdi-server'
        }
      },
      {
        path: 'pro',
        name: 'Pro',
        component: ProMain,
        meta: {
          icon: 'mdi-chess-king'
        }
      },
      {
        path: 'tools',
        name: 'Tools',
        component: Tools,
        meta: {
          icon: 'mdi-chess-king'
        }
      },
    ],
  },
  {
    redirect: '/auth/login',
    path: '/auth',
    name: 'Auth',
    component: AuthMain,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
      {
        path: 'register',
        name: 'Register',
        component: Register,
      }
    ],
  },
  {
    redirect: '/account/profile',
    path: '/account',
    name: 'Account',
    component: AccountMain,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
      },
      {
        path: 'style',
        name: 'Style',
        component: Style,
      },
      {
        path: 'tsa',
        name: 'TSA',
        component: TwoStepAuth,
      },
    ],
    meta: {
      icon: 'mdi-account'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/',
    name: 'UltiCloud',
    redirect: '/dashboard'
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/*
  修复路由转跳错误
 */
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
