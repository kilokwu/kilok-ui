import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/index.scss'
Vue.config.productionTip = false
import Icon from './components/icon.vue'
import Button from "./components/button";
import ButtonGroup from './components/button-group.vue'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import chai from 'chai'
const expect = chai.expect
//单元测试
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'settings',

    }
  })
  button.$mount()
  let userElement = button.$el.querySelector('use')
  let href = userElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
}

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon:'settings',
      loading:true
    }
  })
  button.$mount()
  let userElement = button.$el.querySelector('use')
  let href = userElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
}