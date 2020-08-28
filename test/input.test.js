const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('接收 value',()=>{
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData:{
                value:'1234'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(useElement.value).to.equal('1234')
        vm.$distroy()
    })
})