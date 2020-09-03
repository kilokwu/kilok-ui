<template>
  <div id="app" class="xx">
    <!-- <k-tabs :selected.sync="selectedTab" @update:selected="yyy" >
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
    </k-tabs> -->
    
        <k-popover>
      <template slot="content">
        <div>popover内容</div>
      </template>
      <template >
        <button >点我</button>
      </template>
    </k-popover>
  
    <k-popover>
      <template slot="content">
        <div>popover内容2</div>
      </template>
      <template >
        <button >点我</button>
      </template>
    </k-popover>
  

  </div>
</template>
<style lang="scss" scoped>
.sider { background: #333; width: 150px; } .sider.slide-enter, .sider.slide-leave-to { margin-left: -150px; } .header { height: 100px; background: #999; } .footer { height: 100px; background: #999; } .box { margin: 20px; }
.xx{
  padding-top: 100px;
  padding-left: 100px;
  border:1px solid red;
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
      selectedTab:'sports'
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
  yyy(data){
    console.log('yyy')  
    console.log(data)
  }
  },
};
</script>
