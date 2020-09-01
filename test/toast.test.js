const expect = chai.expect;
import Vue from "vue/dist/vue.esm.js";
import Toast from '../src/components/toast/toast.vue';
Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  it("存在.", () => {
    expect(Toast).to.exist;
  });
 
});
