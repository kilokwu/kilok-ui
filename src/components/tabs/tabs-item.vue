<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KilokTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    },
  },
  created() {
    if(this.eventBus){
    this.eventBus.$on("update:selected", (name) => {
      this.active = name === this.name;
    });
  }
  },
  methods: {
    onClick() {
      if(this.disabled) return
     this.eventBus && this.eventBus.$emit("update:selected", this.name,this);
     this.$emit('click',this)
    },
  },
};
</script>

<style lang="scss" scoped>
$disabled-text-color:grey;
$blue: blue;
.tabs-item {
  flex-shrink: 0;
  height: 100%;
  padding: 0 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
  &.active {
    color: $blue;
    font-weight: bold;
  }
  &.disabled{
      color: $disabled-text-color;
      cursor: not-allowed;
  }
}
</style>
