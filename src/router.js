import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import City from './views/city'
import Miste from './views/miste/miste'
import Order from './views/order/order'
import Search from './views/search/search'
import Profile from './views/profile/profile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/miste',
      component:Miste
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    }
  ]
})
