<template>
  <div class="k-popover" @click="xxx">
    <div v-if="visible" class="content-wrapper">
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
      box-shadow: 0 0 3px rgba(0,0,0,0.5)
  }
}
</style>
