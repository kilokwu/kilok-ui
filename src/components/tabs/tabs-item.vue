<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KilokTabsItem",
  inject: ["eventBus"],
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      console.log(name);
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
};
</script>

<style></style>
