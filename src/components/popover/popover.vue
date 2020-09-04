<template>
  <div class="k-popover" @click.stop="xxx">
    <div
      ref="contentWrapper"
      v-if="visible"
      class="content-wrapper"
      @click="zzz"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
    <slot ></slot>
    </span>
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
    zzz(){
      console.log('zzz')
    }
    ,
    xxx() {
      this.visible = !this.visible;
      if (this.visible === true) {
        this.$nextTick(() => {
            document.body.appendChild(this.$refs.contentWrapper);
            let {top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
            console.log(top,left)
            this.$refs.contentWrapper.style.left = left+window.scrollY+'px'
            this.$refs.contentWrapper.style.top = top+window.scrollY+'px'
          let eventHandler = () => {
            console.log("document 隐藏 popover");
            this.visible = false;
            document.removeEventListener("click", eventHandler);
          };
          document.addEventListener("click", eventHandler);
        });
      } else {
        console.log("vm 隐藏 popover");
      }
    },
  },
  mounted() {
    console.log(this.$refs.triggerWrapper)
  },
};
</script>
<style scoped lang="scss">
.k-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
  .content-wrapper {
    position: absolute;
    border: 1px solide red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
</style>
