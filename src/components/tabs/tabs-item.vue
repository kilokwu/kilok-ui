<template>
  <div class="tabs-item">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"KilokTabsItem",
    porps:{
        disable:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>

</style>