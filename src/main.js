import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.scss'
Vue.config.productionTip = false
import Icon from './components/icon.vue'
import Button from "./components/button";
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
