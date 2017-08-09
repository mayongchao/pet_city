import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home/home.vue'
import catFood from '../components/catFood/catFood.vue'
import sale from '../components/sale/sale.vue'
import canSupermarket from '../components/canSupermarket/canSupermarket.vue'
import video from '../components/video/video.vue'
import catClassRome from '../components/catClassRome/catClassRome.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/catFood',
      component: catFood
    },
    {
      path: '/sale',
      component: sale
    },
    {
      path: '/canSupermarket',
      component: canSupermarket
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/catClassRome',
      component: catClassRome
    },
  ]
})
