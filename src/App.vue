<template>
  <div id="app">
    <k-tabs :selectedT.sync="selectedTab" >
      <k-tabs-head >
        <template slot="actions">
          <button>
            设置
          </button>
        </template>
        <k-tabs-item name="woman" disabled>女人</k-tabs-item>
        <k-tabs-item name="finance">财经</k-tabs-item>
        <k-tabs-item name="sports">体育</k-tabs-item>
      </k-tabs-head>
      <k-tabs-body>
        <k-tabs-pane name="woman">女人相关信息</k-tabs-pane>
        <k-tabs-pane name="finance">财经相关信息</k-tabs-pane>
        <k-tabs-pane name="sports">体育相关信息</k-tabs-pane>
      </k-tabs-body>
    </k-tabs>
  </div>
</template>
<style lang="scss" scoped>
// .sider { background: #333; width: 150px; } .sider.slide-enter, .sider.slide-leave-to { margin-left: -150px; } .header { height: 100px; background: #999; } .footer { height: 100px; background: #999; } .box { margin: 20px; }

</style>
<script>
export default {
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      message: "hi",
      selectedTab:''
    };
  },
  methods: {
    showToast() {
      this.$toast("欢迎光临", {
        position:"top",
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
