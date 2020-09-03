<template>
  <div class="k-popover" @click.stop="xxx">
    <div v-if="visible" class="content-wrapper" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KilokPopover",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        setTimeout(() => {
          let eventHandler = () => {
            console.log("document 隐藏 popover");
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        }, 0);
      } else {
        console.log("vm 隐藏 popover");
      }
    },
  },
};
</script>
<style scoped lang="scss">
.k-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0px;
    border: 1px solide red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>
