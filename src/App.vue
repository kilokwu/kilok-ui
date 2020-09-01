<template>
  <div id="app">
    <div>
      <button @click="showToast">点我</button>
    </div>
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
    inputChange(e) {
      console.log(e.target.value);
    },
    showToast() {
      this.$toast("欢迎光临", {
        position: "middle",
        enableHtml: false,
        closeButton: {
          text: "已经欢迎",
          callback() {
            console.log("他说欢迎光临");
          },
        },
        autoClose: false,
        autoCloseDelay: 3,
      });
    },
  },
};
</script>
