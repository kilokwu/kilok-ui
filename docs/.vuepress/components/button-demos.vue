<template>
  <div>
    <k-button>默认按钮</k-button>
    <k-button icon="settings">默认按钮</k-button>
    <k-button :loading="true">默认按钮</k-button>
            <code>
          <pre> {{ content }} </pre >
          </code>
  </div>
</template>

<script>
import Button from "../../../src/components/button/button";
export default {
  components: {
    "k-button": Button,
  },
  data() {
    return {
      content: `
     <k-button>默认按钮</k-button>
     <k-button icon="settings">默认按钮</k-button>
     <k-button loading>默认按钮</k-button>`,
    };
  },
};
</script>
<style scoped lang="scss"></style>
