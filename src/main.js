import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/flexible.min.js'
import './assets/css/animate.min.css'
import './assets/css/index.css'
import './assets/css/swiper.min.css'

import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant);
import { Notify } from 'vant';
Vue.use(Notify);
import { Toast } from 'vant';
Vue.use(Toast)
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
import { Popup } from 'vant';
Vue.use(Popup);
import { Form } from 'vant';
Vue.use(Form);
import { Field } from 'vant';
Vue.use(Field);


import axios from 'axios';
axios.defaults.baseURL = "http://520mg.com";
// 配置基础url
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 配置post编码
// axios.defaults.withCredentials = true;
//跨域请求的全局凭证
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
