<template>
  <div class="toast" ref="wrapper" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>

    <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{ closeButton.text }}
    </span>
  </div>
</template>

<script>
export default {
  name: "KilokToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 50,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position:{
        type:String,
        default:'top',
        validator(value){
            return ['top','bottom','middle'].indexOf(value) >=0
        }
    }
  },
  computed:{
      toastClasses(){
          return {[`position-${this.position}`]:true}
      }
  },
  mounted() {
    this.execAutoClose();
    this.updateStyle();

  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      this.closeButton.callback();
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        console.log(this.$refs.wrapper.getBoundingClientRect());
        this.$refs.line.style.height = `${
          this.$refs.wrapper.getBoundingClientRect().height
        }px`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.74);
.toast {
  position: fixed;  left: 50%;  font-size: $font-size; line-height: 1.8;
  min-height: $toast-min-height; display: flex; align-items: center; background: $toast-bg; border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5); color: white; padding: 0px 16px;
  .line {
    border-left: 1px solid #666;
    margin-left: 16px;

  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  &.position-top{
      top:0;
      transform:translateX(-50%) ;
  }
  &.position-bottom{
      bottom: 0;
      transform:translateX(-50%) ;
  }
  &.position-middle{
      top: 50%;
      transform:translate(-50%,-50%) ;
  }
}
.message{
    padding:8px 16px;
}
</style>
