import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/style/common.scss';
import '@/assets/style/base.scss';

Vue.config.productionTip = false

// 公共组件引入
import NavList from '@/components/NavList'
import Echarts from '@/components/Echarts.vue'
import Module from '@/components/Module.vue'
Vue.component('NavList', NavList);
Vue.component('Echarts', Echarts);
Vue.component('Module', Module);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
