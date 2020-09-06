<template>
  <div id="app" style="padding:100px;">
    <!-- <k-tabs :selected.sync="selectedTab" @update:selected="yyy" > <k-tabs-head > <template slot="actions"> <button> 设置 </button> </template> <k-tabs-item name="woman" disabled>女人</k-tabs-item> <k-tabs-item name="finance">财经</k-tabs-item> <k-tabs-item name="sports">体育</k-tabs-item> </k-tabs-head> <k-tabs-body> <k-tabs-pane name="woman">女人相关信息</k-tabs-pane> <k-tabs-pane name="finance">财经相关信息</k-tabs-pane> <k-tabs-pane name="sports">体育相关信息</k-tabs-pane> </k-tabs-body> </k-tabs> --> <!-- <div style="overflow:hidden;padding-top:50px;padding-bottom:40px" > <k-popover position="top"> <template slot="content" slot-scope="{close}"> <k-button @click="close">关闭</k-button> </template> <template> <k-button>点我</k-button> </template> </k-popover> <k-popover position="bottom"> <template slot="content"> <div>popover内容2</div> </template> <template> <k-button>点我</k-button> </template> </k-popover> <k-popover position="left"> <template slot="content"> <div>popover内容2</div> </template> <template> <k-button>点我</k-button> </template> </k-popover> <k-popover position="right"> <template slot="content"> <div>popover内容2</div> </template> <template> <k-button>点我</k-button> </template> </k-popover> </div> <div style="overflow:hidden;padding-top:150px;padding-bottom:40px"  > <k-popover position="top" trigger="hover"> <template slot="content"> <div>popover内容</div> </template> <template> <k-button>点我</k-button> </template> </k-popover> <k-popover position="bottom"  trigger="hover"> <template slot="content"> <div>popover内容2</div> </template> <template> <k-button>点我</k-button> </template> </k-popover> <k-popover position="left"  trigger="hover"> <template slot="content"> <div>popover内容2</div> </template> <template> <k-button>点我</k-button> </template> </k-popover> <k-popover position="right"  trigger="hover"> <template slot="content"> <div>popover内容2</div> </template> <template> <k-button>点我</k-button> </template> </k-popover> </div> -->
    <k-collapse :selected.sync="selectedTab" single >
      <k-collapse-item title="标题1" name="1">内容1</k-collapse-item>
      <k-collapse-item title="标题2" name="2">内容2</k-collapse-item>
      <k-collapse-item title="标题3" name="3">内容3</k-collapse-item>
    </k-collapse>
    {{selectedTab}}
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
      selectedTab: ["2"],
    };
  },
  methods: {
    showToast() {
      this.$toast("欢迎光临", {
        position: "top",
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
    yyy() {
      console.log("yyy");
    },
  },
 
};
</script>
