<template>
  <div id="app">
    <g-tabs :selected.sync= "selectedTab" >
      <g-tabs-head>
        <g-tabs-item name="woman">女人</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">女人相关信息</g-tabs-pane>
        <g-tabs-pane name="finance">财经相关信息</g-tabs-pane>
        <g-tabs-pane name="sports">体育相关信息</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<style lang="scss" scoped>
.sider {
  background: #333;
  width: 150px;
}
.sider.slide-enter,
.sider.slide-leave-to {
  margin-left: -150px;
}
.header {
  height: 100px;
  background: #999;
}
.footer {
  height: 100px;
  background: #999;
}
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
      message: "hi",
    };
  },
  methods: {
    showToast() {
      this.$toast("欢迎光临", {
        position,
        enableHtml: false,
        closeButton: {
          text: "已经欢迎",
          callback() {
            console.log("他说欢迎光临");
          },
        },
        autoClose: 3,
      });
    },
  },
};
</script>
