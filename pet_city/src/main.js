import Vue from 'vue'
import VueScroll from 'vue-scroller'
/*按需加载mint-ui组件*/
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

import router from './router/index'
import app from './app.vue'

Vue.use(VueScroll)
/*Vue.use(MintUI)*/
/*渲染mint-ui组件*/
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
new Vue({
  el:'#app',
  render:h=>h(app),
  router
})
