const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/components/tabs/tabs.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })

})