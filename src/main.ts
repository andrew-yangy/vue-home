import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Element from 'element-ui'
import SvgIcon from '@/components/SvgIcon/index.vue'

Vue.config.productionTip = false
Vue.use(Element, {
  size: 'medium', // set element-ui default size
})
Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
