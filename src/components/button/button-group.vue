<template>
  <div class="k-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KilokButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`k-button-group的子元素应该全是button,而你写的识${name}`);
      }
    }
  },
};
</script>

<style lang="scss">
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.k-button-group { display: flex; vertical-align: middle;
  > .k-button { border-radius: 0; margin-right: 0; &:not(:first-child) { margin-left: -1px; }
    &:first-child { border-top-left-radius: $border-radius; border-bottom-left-radius: $border-radius; }
    &:last-child { border-top-right-radius: $border-radius; border-bottom-right-radius: $border-radius; }
    &:hover { position: relative; z-index: 1; }
  }
}
</style>
