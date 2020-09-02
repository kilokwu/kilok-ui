<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "KilokTabsPane",
  inject: ["eventBus"],
  props:{
      name:{
          type:String,
          required:true
      }
  },
  data(){
      return{
          active:false
      }
  },
  computed:{
      classes(){
          return{
              active:this.active
          }
      }
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name
    });
  },
};
</script>
<style scoped lang="scss">
$red: red;
.tabs-pane {
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
  }
}
</style>
