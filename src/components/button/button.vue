<template>
  <div class="buttonWrapper">
    <button
      class="k-button"
      :class="{ [`icon-${iconPosition}`]: true }"
      @click="$emit('click')"
    >
      <k-icon class="icon" v-if="icon && !loading" :name="icon"></k-icon>
      <k-icon v-if="loading" class="loading icon" name="loading"></k-icon>
      <div class="content">
        <slot />
      </div>
    </button>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  name: "KilokButton",
  components: {
    "k-icon": Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },

    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
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
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.buttonWrapper { margin: 2px;display: inline-block;
  .k-button { font-size: $font-size; height: $button-height; padding: 0 1em; vertical-align: middle; border-radius: $border-radius; border: 1px solid $border-color;
    background: $button-bg; display: inline-flex; justify-content: center; align-items: center;
    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
    &:focus { outline: none; }
    > .content { order: 2; }
    > .icon { order: 1; margin-right: 0.1em; }
    &.icon-right {
      > .content { order: 1; }
      > .icon { order: 2; margin-right: 0em; margin-left: 0.1em; } }
    .loading { animation: spin 2s infinite linear; }
  }
}
</style>
