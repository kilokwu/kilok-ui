<template>
  <div class="tabs">
      <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:"KilokTabs",
    data(){//不需要用户传值，自身维护
        return{
            eventBus:new Vue()
        }
    },
    props:{//需要用户传值（前端开发者）传值
        selected:{
            type:String,
            required:true
        },
        direction:{
            type:String,
            default:'horizontal',
            validator(value){
                return ['horizontal','vertical'].indexOf(value)>=0
            }
        }
    },
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    mounted(){
        if(this.$children.length === 0){
          console && console.warn &&  console.warn('tabs的子组件应该是tabs-head和tabs-body,但是你没有写子组件')
        }
        this.$children.forEach((vm)=>{
            if(vm.$options.name === 'KilokTabsHead'){
                vm.$children.forEach((childVm)=>{
                    if(childVm.$options.name === 'KilokTabsItem' && childVm.name === this.selected){
                        this.eventBus.$emit('update:selected',this.selected,childVm)
                    }
                })
            }
        })
    }
}
</script>

<style lang='scss' scoped>
.tabs{
    width: 100%;
}
</style>