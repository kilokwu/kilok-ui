const expect = chai.expect;
import Vue from "vue/dist/vue.esm.js";
import Tabs from "../src/components/tabs/tabs.vue";
import TabsHead from "../src/components/tabs/tabs-head.vue";
import TabsBody from "../src/components/tabs/tabs-body.vue";
import TabsItem from "../src/components/tabs/tabs-item.vue";
import TabsPane from "../src/components/tabs/tabs-pane.vue";
Vue.component("k-tabs", Tabs);
Vue.component("k-tabs-head", TabsHead);
Vue.component("k-tabs-body", TabsBody);
Vue.component("k-tabs-item", TabsItem);
Vue.component("k-tabs-pane", TabsPane);
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("存在.", () => {
    expect(Tabs).to.exist;
  });
  it("接受selected prop", (done) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <k-tabs selected="woman" >
    <k-tabs-head >
      <k-tabs-item name="woman" >女人</k-tabs-item>
      <k-tabs-item name="finance">财经</k-tabs-item>
      <k-tabs-item name="sports">体育</k-tabs-item>
    </k-tabs-head>
    <k-tabs-body>
      <k-tabs-pane name="woman">女人相关信息</k-tabs-pane>
      <k-tabs-pane name="finance">财经相关信息</k-tabs-pane>
      <k-tabs-pane name="sports">体育相关信息</k-tabs-pane>
    </k-tabs-body>
  </k-tabs>
        `
    let vm =new Vue({
        el:div
    })
    vm.$nextTick(()=>{
        let x= vm.$el.querySelector(`.tabs-item[data-name="woman"]`)
        expect(x.classList.contains('active')).to.be.true
        done()
    })

})

    it('可以接受 direction prop',()=>{

    })


})
