<template>
  <div id="app">
    <div class="box">
      <g-input value="张三"></g-input>
      <g-input value="李四" :disabled="true"></g-input>
      <g-input value="李四" :readonly="true"></g-input>
    </div>
    <div class="box">
      <g-input value="王五" @change="inputChange"></g-input>
    </div>
    <div class="box">
      <g-button
        iconPosition="left"
        :loading="loading1"
        @click="loading1 = !loading1"
        >我爱JS</g-button
      >
      <g-button
        iconPosition="right"
        icon="settings"
        :loading="loading2"
        @click="loading2 = !loading2"
        >我爱JS</g-button
      >
      <g-button
        iconPosition="right"
        :loading="loading3"
        @click="loading3 = !loading3"
        >我爱JS</g-button
      >
      <div id="test"></div>
      <g-button-group>
        <g-button icon="left">后退</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" iconPosition="right">前进</g-button>
      </g-button-group>
    </div>
  </div>
</template>
<style lang="scss">
.box {
  margin: 20px;
}
</style>
<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
    };
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
  },
};
</script>
