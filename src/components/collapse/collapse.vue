<template>
  <div class="collapse">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"KilokCollapse",
}
</script>
<style scoped lang='scss'>
$border-radius:4px;
$grey:#ddd;
.collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
    border-bottom:none;
}
</style>