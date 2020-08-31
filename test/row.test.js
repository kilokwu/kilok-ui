const expect = chai.expect;
import Vue from "vue/dist/vue.esm.js";
import Row from "../src/components/row-col/row.vue";
import COl from "../src/components/row-col/col.vue";
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row", () => {
  it("存在.", () => {
    expect(Row).to.exist;
  });
  it("接受 gutter 属性", (done) => {
    Vue.component("k-row", Row);
    Vue.component("k-col", COl);
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML = `
    <k-row gutter="20">
      <k-col span="12"></k-col>
      <k-col span="12"></k-col>
    </k-row>
    `;
    const vm = new Vue().$mount('div')
    setTimeout(() => {
      const rows = vm.$el.querySelectorAll('.row')
      expect(getComputedStyle(rows[0]).marginLeft).to.eq('-10px')
      expect(getComputedStyle(rows[0]).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      done()
      vm.$destroy()
    }, 0);
  });
  it('接受 align 属性',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData:{
        align:'right'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    div.remove()
    vm.$destroy()
  })
});
