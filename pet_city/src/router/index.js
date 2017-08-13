import Vue from 'vue'
import Router from 'vue-router'

import app from '../app.vue'

import cat from '../components/cat/cat.vue'

import home from '../components/home/home.vue'
import catFood from '../components/catFood/catFood.vue'
import sale from '../components/sale/sale.vue'
import canSupermarket from '../components/canSupermarket/canSupermarket.vue'
import video from '../components/video/video.vue'
import catClassRome from '../components/catClassRome/catClassRome.vue'

import saleArrival from '../components/saleArrival/saleArrival.vue'
import saleHottest from '../components/saleHottest/saleHottest.vue'
import saleCatFood from '../components/saleCatFood/saleCatFood.vue'
import saleCatSnacks from '../components/saleCatSnacks/saleCatSnacks.vue'
import saleHealth from '../components/saleHealth/saleHealth.vue'


Vue.use(Router)

export default new Router({
    /*将router-link 的 linkActiveClass 的属性变为 active 就可以设置a标签的active 属性来切换效果*/
    linkActiveClass: "active",
    /*路由路径不带#号*/
    mode: 'history',
    routes: [
       /* {
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
            redirect: '/sale/arrival'
        },
        {
            path: '/sale',
            component: sale,
            children: [
                {path: 'arrival', component: saleArrival},
                {path: 'hottest', component: saleHottest},
                {path: 'catFood', component: saleCatFood},
                {path: 'CatSnacks', component: saleCatSnacks},
                {path: 'Health', component: saleHealth}
            ]
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
        },*/

        {
            path: '/',
            redirect: '/epet/cat/home'
        },
        {
            path: '/epet/cat',
            redirect: '/epet/cat/home'
        },
        {
            path: '/epet/cat/sale',
            redirect: '/epet/cat/sale/arrival'
        },
        {
            path: '/epet/cat',
            component: cat
        },


        {
            path: '/epet/cat',
            component: cat,
            children: [
                {path: 'home', component: home},
                {path: 'catFood', component: catFood},
                {path: 'sale', component: sale},
                {path: 'canSupermarket', component: canSupermarket},
                {path: 'video', component: video},
                {path: 'catClassRome', component: catClassRome},
            ]
        },


        {
            path: '/epet/cat/sale',
            component: sale,
            children: [
                {path: 'arrival', component: saleArrival},
                {path: 'hottest', component: saleHottest},
                {path: 'catFood', component: saleCatFood},
                {path: 'CatSnacks', component: saleCatSnacks},
                {path: 'Health', component: saleHealth}
            ]
        },

        /*
         {
         path: '/epet/cat',
         redirect: '/epet/cat/home'
         },

         {
         path: '/epet/cat/home',
         component: home
         },
         {
         path: '/epet/cat/catFood',
         component: catFood
         },
         {
         path: '/epet/cat/sale',
         component: sale
         },
         {
         path: '/epet/cat/canSupermarket',
         component: canSupermarket
         },
         {
         path: '/epet/cat/video',
         component: video
         },
         {
         path: '/epet/cat/catClassRome',
         component: catClassRome
         },*/

        /* {
         path: '/epet/cat',
         component: home,
         children: [
         {path: 'home', component: home},
         {path: 'catFood', component: catFood},
         {path: 'sale', component: sale},
         {path: 'canSupermarket', component: canSupermarket},
         {path: 'video', component: video},
         {path: 'catClassRome', component: catClassRome},
         ]
         },*/


    ]
})
