import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router/index'
// element
import './plugins/element'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
