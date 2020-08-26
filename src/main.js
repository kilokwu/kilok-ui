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
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',

    }
  })
  vm.$mount()
  let userElement = vm.$el.querySelector('use')
  let href = userElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  vm.$el.remove()
  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
      loading:true
    }
  })
  vm.$mount()
  let userElement = vm.$el.querySelector('use')
  let href = userElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}

{
  const div =document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div =document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
      iconPosition:'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}

{
  //mock

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon:'settings',
    }
  })
  vm.$mount()
  let spy = chai.spy(function(){})
  vm.$on('click',spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}