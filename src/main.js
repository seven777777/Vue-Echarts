import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';

Vue.use(ElementUI);

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/iconfont/iconfont.css';
import '@/assets/style/common.scss';
import '@/assets/style/base.scss';

Vue.config.productionTip = false

// 公共组件引入
import NavList from '@/components/NavList'
import Echarts from '@/components/Echarts.vue'
import Module from '@/components/Module.vue'
import CodeBlock from '@/components/CodeBlock.vue'
Vue.component('NavList', NavList);
Vue.component('Echarts', Echarts);
Vue.component('Module', Module);
Vue.component('CodeBlock', CodeBlock);

import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
