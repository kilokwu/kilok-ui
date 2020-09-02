<template>
  <div class="tabs">
      <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:"KilokTabs",
    data(){
        return{
            eventBus:new Vue()
        }
    },
    porps:{
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
    created(){
        // this.$emit('update:selected','xxx')
        // console.log('eventBus')
        // console.log(this.eventBus)
    }
}
</script>

<style>

</style>