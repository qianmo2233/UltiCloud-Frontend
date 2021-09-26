import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthMain from "@/views/Auth/AuthMain";
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";
import DashboardMain from "@/views/Dashboard/DashboardMain";
import Home from "@/views/Dashboard/Home";
import NotFound from "@/views/NotFound";
import ServerMain from "@/views/Server/ServerMain";

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
  routes
})

export default router
