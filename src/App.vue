<template>
  <div id="app">
    <kButton >我爱JS</kButton>
    <kButton iconPosition="left"  icon='settings'>我爱JS</kButton>
    <kButton iconPosition="right" icon='settings'>我爱JS</kButton>
  </div>
</template>
<style>

</style>
<script>
import kButton from "./components/button";
export default {
  components: {
    kButton,
  },
};
</script>
