<template>
  <div
    class="echart"
    ref="mychart"
    id="mychart"
    :style="{ width: '70%', height: tableHeight1 + 'px' }"
  ></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["echarData"],
  data() {
    return {
      myEcharts: "",
      tableHeight1: 0,
      titleFontSize: 0,
      option: {
        // color: ["#5599EC", "#00EA9C", "#F9CE16"],
        title: {
          text: "设备效率",
        },
        grid: {
          left: "5%",
          bottom: "10%",
        },
        tooltip: {},
        // legend: {
        //   data: "OEE",
        // },
        xAxis: {},
        yAxis: {
          type: "category",
          data: ["line1", "line2", "line3"],
        },
        series: [
          {
            name: "设备效率",
            type: "bar",
            // data: [5, 20, 36],
            itemStyle: {
              // normal: {
              // 随机显示
              // color: function (d) {
              //   return (
              //     "#" +
              //     Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(
              //       16
              //     )
              //   );
              // },

              // 定制显示（按顺序）
              color: function (params) {
                var colorList = [
                  // "#C33531",
                  // "#EFE42A",
                  "#64BD3D",
                  "#EE9201",
                  "#29AAE3",
                  "#B74AE5",
                  "#0AAF9F",
                  "#E89589",
                  "#16A085",
                  "#4A235A",
                  "#C39BD3 ",
                  "#F9E79F",
                  "#BA4A00",
                  "#ECF0F1",
                  "#616A6B",
                  "#EAF2F8",
                  "#4A235A",
                  "#3498DB",
                ];
                return colorList[params.dataIndex];
              },
              // },
            },
          },
        ],
      },
    };
  },
  watch: {
    "echarData.value"(val, old) {
      // console.log(val, old);
      // if (val != old) {
      this.updata();
      // }
    },
  },
  beforeMount() {
    this.tableHeight1 =
      ((window.innerHeight ||
        document.documentElement.innerHeight ||
        document.body.clientHeight) -
        150) *
        0.54 -
      40;
  },
  mounted() {
    window.addEventListener("resize", this.getScreenHeight, false);
    // this.resizeScreen();
    this.initChart();
    window.addEventListener("resize", this.screenAdapter);
    this.screenAdapter();
  },
  destroyed() {
    window.removeEventListener("resize", this.getScreenWidth, false);
    window.removeEventListener("resize", this.screenAdapter);
  },
  methods: {
    initChart() {
      this.myEcharts = echarts.init(this.$refs.mychart);
      const initOption = {
        title: {
          text: "设备效率",
        },
        grid: {
          left: "8%",
          bottom: "10%",
        },
        tooltip: {},
        // legend: {
        //   data: "OEE",
        // },
        xAxis: {},
        yAxis: {
          type: "category",
          data: ["line1", "line2", "line3"],
        },
        series: [
          {
            name: "设备效率",
            type: "bar",
            // data: [5, 20, 36],
           
            itemStyle: {
              // normal: {
              // 随机显示
              // color: function (d) {
              //   return (
              //     "#" +
              //     Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(
              //       16
              //     )
              //   );
              // },

              // 定制显示（按顺序）
              color: function (params) {
                var colorList = [
                  // "#C33531",
                  // "#EFE42A",
                  "#64BD3D",
                  "#EE9201",
                  "#29AAE3",
                  "#B74AE5",
                  "#0AAF9F",
                  "#E89589",
                  "#16A085",
                  "#4A235A",
                  "#C39BD3 ",
                  "#F9E79F",
                  "#BA4A00",
                  "#ECF0F1",
                  "#616A6B",
                  "#EAF2F8",
                  "#4A235A",
                  "#3498DB",
                ];
                return colorList[params.dataIndex];
              },
              // },
            },
          },
        ],
      };
      this.myEcharts.setOption(initOption);
    },
    updata() {
      // this.option.legend.data=this.echarData.lable
      // this.option.yAxis.data = ;
      // this.option.series[0].data = ;
      // console.log(this.option);

      const dataOption = {
        yAxis: {
          data: this.echarData.lable,
        },
        series: [
          {
            data: this.echarData.value,
          },
        ],
      };

      this.myEcharts.setOption(dataOption); // 渲染页面
      // this.myEcharts.setOption(this.option, true); // 渲染页面
      // window.addEventListener("resize", () => {
      //   this.myEcharts.resize();
      // });
    },
    getScreenHeight() {
      this.tableHeight1 =
        ((window.innerHeight ||
          document.documentElement.innerHeight ||
          document.body.clientHeight) -
          150) *
          0.54 -
        40;
      // console.log(this.tableHeight1);
    },
    screenAdapter() {
      this.titleFontSize = (this.$refs.mychart.offsetWidth / 100) * 2;

      const adapterOption = {
        title: {
          fontSize: Math.round(this.titleFontSize * 2),
        },

        // 圆点分类标题
        // legend: {
        //   textStyle: {
        //     fontSize: Math.round(this.titleFontSize * 1.2),
        //   },
        // },
      };
      // console.log(adapterOption);
      // 图标自适应变化配置
      this.myEcharts.setOption(adapterOption);
      this.myEcharts.resize();
      //  console.log( Math.round(this.titleFontSize * 2));
    },
  },
};
</script>

<style lang="scss" scoped></style>
