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

describe("TabsItem", () => {
  it("存在.", () => {
    expect(TabsItem).to.exist;
  });
  it("接受name属性 ", () => {
    const Constructor = Vue.extend(TabsItem);
    const vm = new Constructor({
      propsData: {
        name: "xxx",
      },
    }).$mount();
    expect(vm.$el.getAttribute("data-name")).to.eq("xxx");
  });

  it("disabled ", () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
    propsData: {
        name:'xxx',
        disabled: true
    }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
})
});
