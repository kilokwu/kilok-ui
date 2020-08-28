<template>
  <div id="app">
    <div class="box">
      <k-input value="张三"></k-input>
      <k-input value="李四" :disabled="true"></k-input>
      <k-input value="李四" :readonly="true"></k-input>
    </div>
    <div class="box">
      <k-input value="王五" @change="inputChange"></k-input>
    </div>
    <div class="box">
      <k-input   v-model="message"></k-input>
      <p>{{message}}</p>
    </div>
    <div class="box">
      <k-button
        iconPosition="left"
        :loading="loading1"
        @click="loading1 = !loading1"
        >我爱JS</k-button
      >
      <k-button
        iconPosition="right"
        icon="settings"
        :loading="loading2"
        @click="loading2 = !loading2"
        >我爱JS</k-button
      >
      <k-button
        iconPosition="right"
        :loading="loading3"
        @click="loading3 = !loading3"
        >我爱JS</k-button
      >
      <div id="test"></div>
      <k-button-group>
        <k-button icon="left">后退</k-button>
        <k-button>更多</k-button>
        <k-button icon="right" iconPosition="right">前进</k-button>
      </k-button-group>
    </div>
    <div style="broder:1px solide black">
      <div style="border:1px solid black">

    <k-row  gutter='20'>
      <k-col>1</k-col>
      <k-col >2</k-col>
    </k-row>
    <k-row  gutter='20'>
      <k-col span='1' >1</k-col>
      <k-col span='20' offset='2' >2</k-col>
    </k-row>
    <k-row  gutter='20'>
      <k-col>1</k-col>
      <k-col >2</k-col>
      <k-col >2</k-col>
    </k-row>
    <k-row  gutter='20'>
      <k-col >1</k-col>
      <k-col >2</k-col>
      <k-col >2</k-col>
      <k-col >2</k-col>
    </k-row>
      </div>
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
      message:'hi'
    };
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value);
    },
  },
};
</script>
