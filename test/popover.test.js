const expect = chai.expect;
import Vue from "vue/dist/vue.esm.js";
import Popover from '../src/components/popover/popover.vue';
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Popover", () => {
  it("存在.", () => {
    expect(Popover).to.be.exist;
  });
  it("可以接收position.", (done) => {
    Vue.component('k-popover',Popover)
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <k-popover position = "bottom" ref="a">
    <template slot="content">弹出内容</template>
    <button>点我</button>
    </k-popover>
    `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
        vm.$el.querySelector('button').click()
        vm.$nextTick(()=>{
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
    })
  });
  xit('可以设置trigger',(done)=>{
    Vue.component('k-popover',Popover)
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <k-popover trigger = "hover" ref="a">
    <template slot="content">弹出内容</template>
    <button>点我</button>
    </k-popover>
    `
    const vm = new Vue({
      el:div
    })
    setTimeout(()=>{
        let event = new Event('mouseenter');
        vm.$el.dispatchEvent(event)
        vm.$nextTick(()=>{
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper).to.exist
            done()
        })
    },200)
  })
});
