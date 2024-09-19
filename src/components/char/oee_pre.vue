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
  props: ["echarData", "title", "echartHeight"],
  data() {
    return {
      myEcharts: "",
      tableHeight1: 0,
      koiTime: null,
      titleFontSize: 0,
    };
  },
  watch: {
    echarData(val, old) {
      // console.log(val, old);
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
        150) *
        0.32 -
      40;
  },
  mounted() {
    // this.getScreenHeight();
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
    resizeScreen() {
      this.koiTime = setInterval(() => {
        this.getScreenHeight();
        // this.getScreenWidth();
      }, 200);
    },
    initChart() {
      this.myEcharts = echarts.init(this.$refs.mychart);
      const initOption = {
        title: {
          text: this.title,
          left: "50px",
          fontSize: 12,
        },
        visualMap: {
          show: false,
        },
        tooltip: {},
        series: [
          {
            type: "pie",
            radius: ["50%", "80%"],
            center: ["50%", "50%"],
            data: [
              {
                value: 0,
                label: {
                  show: true,
                  position: "center",
                  fontWeight: "bold",
                  fontSize: 16,
                  formatter: "{d}%",
                },
                itemStyle: { color: "rgb(29, 170, 149)" },
              },
              { value: 0, itemStyle: { color: "#f1f1f1" } },
            ],

            itemStyle: {
              borderWidth: 7,
              borderColor: "#fff",
            },
            // 初始化echarts的动画效果
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };
      this.myEcharts.setOption(initOption);
    },
    updata() {
      // console.log(this.echartHeight);
      // this.option.series[0].data[0].value = this.echarData;
      // this.option.series[0].data[1].value = 100 - this.echarData;
      this.allData = [];
      this.allData.push({
        value: this.echarData,
        name: "效率",
        label: {
          show: true,
          position: "center",
          fontWeight: "bold",
          fontSize: 16,
          formatter: "{d}%",
        },
        itemStyle: { color: "rgb(29, 170, 149)" },
      });
      this.allData.push({
        value: 100 - this.echarData,
        // name:'效率',
        label: {
          show: false,
          position: "center",
          fontWeight: "bold",
          fontSize: 16,
          formatter: "{d}%",
        },
        itemStyle: { color: "#f1f1f1" },
      });
      const dataOption = {
        series: [
          {
            data: this.allData,
          },
        ],
      };

      this.myEcharts.setOption(dataOption); // 渲染页面
    },
    getScreenHeight() {
      this.tableHeight1 =
        ((window.innerHeight ||
          document.documentElement.innerHeight ||
          document.body.clientHeight) -
          150) *
          0.32 -
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
