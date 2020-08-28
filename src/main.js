import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.scss'
Vue.config.productionTip = false
import Icon from './components/button/icon.vue'
import Button from "./components/button/button";
import ButtonGroup from './components/button/button-group.vue'
import Input from './components/input/input.vue'
import Row from './components/row-col/row.vue'
import Col from './components/row-col/col.vue'

Vue.component('g-button',Button)
Vue.component('g-input',Input)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


