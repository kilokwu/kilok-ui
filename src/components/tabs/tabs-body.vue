<!--  -->
<template>
  <div class="tabs-body">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'KilokTabsBody',
     inject:['eventBus'],
}

</script>
<style scoped lang='scss'>
</style>