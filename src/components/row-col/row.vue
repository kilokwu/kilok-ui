<template>
  <div class="row" :class="rowClass" :style="rowStyle"> 
      <slot></slot>    
  </div>
</template>

<script>
export default {
  name:'KilokRow',
  props:{
    gutter:{
      type:[Number,String]
    },
    align:{
      type:String,
      validator(value){
        return ['left','right','center'].indexOf(value)>=0
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      vm.gutter = this.gutter
    })
  },
  computed: {
    rowStyle(){
      let gutter = this.gutter
      return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
    },
    rowClass(){
      let {align} = this
      return [align && `align-${align}`]
    }
  },
};
</script>

<style lang="scss">
.row {
  margin: 0 -10px;
  border:1px solid red;
  display: flex;
  flex-wrap: wrap;
  &.align-left{
    justify-content: flex-start;
  }
  &.align-right{
    justify-content: flex-end;
  }
  &.align-center{
    justify-content: center;
  }
}

</style>
