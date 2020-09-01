import Toast from "./toast.vue";

let currentToast
export default {
  install(Vue) {
    Vue.prototype.$toast = function(message, toastOptions) {
        if(currentToast){
            currentToast.close()
        }
        currentToast =  createToast({Vue, message, propsData: toastOptions });
    };
  },
};











/**
 * helper
 */
function createToast({Vue, message, propsData }) {
    let Constructor = Vue.extend(Toast);
    let toast = new Constructor({
      propsData,
    });
    toast.$slots.default = [message];
    toast.$mount();
    document.body.appendChild(toast.$el);
    return toast
  }