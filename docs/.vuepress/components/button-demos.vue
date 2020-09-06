<template>
  <div>
      <k-button>默认按钮</k-button>
      <k-button icon = 'settings'>默认按钮</k-button>
      <k-button loading>默认按钮</k-button>
      <k-button disabled>默认按钮</k-button>
  </div>
</template>

<script>
import Button from '../../../src/components/button/button'
export default {
    components:{
        'k-button':Button
    }
}
</script>
<style scoped lang='scss'>
</style>