<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "KilokCollapse",
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    let selectedCopy = JSON.parse(JSON.stringify(this.selected))
    this.eventBus.$on("update:addSelected", (name) => {
        if(this.single){
            selectedCopy = [name]
        }else{
            selectedCopy.push(name);
        }
      this.$emit("update:selected", selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("update:removeSelected", (name) => {
      let index = selectedCopy.indexOf(name);
      this.selected.splice(index, 1);
      this.$emit("update:selected", selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });
    this.$children.forEach((vm) => {
      vm.single = this.single;
      console.log(vm);
    });
  },
};
</script>
<style scoped lang="scss">
$border-radius: 4px;
$grey: #ddd;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>
