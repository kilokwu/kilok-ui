<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft: gutter/2+'px',paddingRight: gutter/2+'px'}"
  >
  <div style="border:1px solid green;height:100px"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
 
  },
  mounted(){
      console.log('col mounted')
  },
  data(){
      return{
          gutter:0
      }
  }
};
</script>

<style lang="scss">
.col {
  height: 100px;
  width: 50%;
  padding: 0 10px;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>
