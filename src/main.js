import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import LoadMore from './components/LoadMore/index'
import Router from './components/Router/index'
import Carousel from './components/Carousel/index'
import Navs from './components/Navs/index'
import Navs2 from './components/Navs2/index'
import HotList from './components/HotList/index'
import animate from 'animate.css'
import './assets/css/common.less'
import './assets/font/iconfont.css'
import './assets/font/longin/iconfont.css'
import './router/permission'
import 'swiper/dist/css/swiper.css'
import Tabs from './components/Tabs'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/icon/iconfont.css'
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)
Vue.use(Tabs)
Vue.use(VueAwesomeSwiper);
Vue.use(LoadMore);
Vue.use(Router);
Vue.use(Carousel);
Vue.use(Navs);
Vue.use(Navs2);
Vue.use(HotList);
Vue.use(animate);
Vue.config.productionTip = false
Vue.prototype.$api=api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
