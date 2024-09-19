<template>
  <div>
    <svg-icon
      :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"
      @click="click"
    />
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "Screenfull",
  data() {
    return {
      isFullscreen: false,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    click() {
      let fullDiv = "";
      switch (this.$route.path) {
        case "/kanban/smt_lot":
          fullDiv = document.getElementById("fullDiv1");
          break;
        case "/kanban/smt_gpm":
          fullDiv = document.getElementById("fullDiv2");
          break;
          case "/kanban/oee":
          fullDiv = document.getElementById("fullDiv3");
          break;
      }
      if (fullDiv) {
        //找到后调用自带的toggle事件进行放大操作
        screenfull.toggle(fullDiv);
      } else {
        //判断浏览器是否支持该组件
        if (!screenfull.enabled) {
          this.$message({
            message: "you browser can not work",
            type: "warning",
          });
          return false;
        }
        //放大页面 左侧菜单栏不会隐藏
        screenfull.toggle();
      }
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off("change", this.change);
      }
    },
  },
};
</script>

<style scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
