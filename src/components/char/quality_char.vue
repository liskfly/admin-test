<template>
  <div
    class="echart"
    ref="mychart"
    id="mychart"
    :style="{ width: '100%', height: tableHeight1 + 'px' }"
  ></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: ["echarData"],
  data() {
    return {
      tableHeight1: 0,
      myEcharts: "",
      initOption: {
        title: {
          text: "良率",
          x: "center",
          y: "top",
        },
        grid: {
          left: "5%",
          right: "15%",
        },
        tooltip: {},
        legend: {
          type: "scroll",
          orient: "vertical",
          align: "left",
          x: "right", //可设定图例在左、右、居中
          y: "center",
        },
        xAxis: [
          {
            data: [
              "Laser-Bot",
              "DEK-Bot",
              "NPM-Bot",
              "AOI-1-Bot",
              "Reflow-Bot",
              "AOI-2-Bot",
              "ICT-Bot",
              "Laser-Top",
              "SPI-Top",
              "SPI-Top",
              "NPM-Top",
              "AOI-1-Top",
              "Reflow-Top",
              "AOI-2-Top",
              "ICT-Top",
            ],
            axisLabel: {
              interval: 0, //代表显示所有x轴标签显示
              rotate: -40,
            },
          },
        ],
        yAxis: {
          min: "dataMin",
          max: 1,
          // interval:0.05,
          axisLabel: {
            formatter: function (value, index) {
              return value.toFixed(2);
            },
          },
        },
        series: [],
      },
    };
  },
  watch: {
    echarData(val, old) {
      if (val != old) {
        this.updata();
      }
    },
  },
  beforeMount() {
    this.tableHeight1 =
      ((window.innerHeight ||
        document.documentElement.innerHeight ||
        document.body.clientHeight) -
        210) *
      0.5;
  },
  mounted() {
    window.addEventListener("resize", this.getScreenHeight, false);
    this.initEcharts();
    //  this.myEcharts = echarts.init(this.$refs.mychart);
  },
  destroyed() {
    window.removeEventListener("resize", this.getScreenWidth, false);
  },
  methods: {
    initEcharts() {
      this.myEcharts = echarts.init(this.$refs.mychart);
      this.myEcharts.setOption(this.initOption, true);
    },
    updata() {
      // this.initEcharts()
      // const dataOption = {
      //   // yAxis: {
      //   //   data: this.echarData.lable,
      //   // },
      //   series: [...this.echarData],
      // };
      this.initOption.series = [...this.echarData];
      this.myEcharts.setOption(this.initOption, true); // 渲染页面
      // window.addEventListener("resize", () => {
      //   this.myEcharts.resize();
      // });
    },
    getScreenHeight() {
      // console.log(11);
      this.tableHeight1 =
        ((window.innerHeight ||
          document.documentElement.innerHeight ||
          document.body.clientHeight) -
          210) *
        0.5;
      // console.log(this.tableHeight1);
      this.myEcharts.resize();
      //  console.log(this.tableHeight1);
    },
  },
};
</script>
