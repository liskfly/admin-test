<template>
  <div class="big-box">
    <el-row>
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div class="left-box">
            <el-form
              label-position="left"
              :model="form"
              ref="form"
              label-width="80px"
              size="normal"
            >
              <el-form-item label="工单">
                <el-select
                  v-model="form.order"
                  @change="change"
                  filterable
                  placeholder="点击选择"
                >
                  <el-option
                    v-for="item in workOrderList"
                    :key="item.WorkOrder"
                    :label="item.WorkOrder"
                    :value="item.WorkOrder"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="线别">
                <el-select
                  v-model="form.lineName"
                  placeholder="选择线别"
                  @change="getStatus"
                >
                  <el-option
                    v-for="item in lineList"
                    :key="item.lineType"
                    :label="item.lineType"
                    :value="item.lineType"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="SIDE">
                <el-select
                  v-model="form.side"
                  placeholder="选择SIDE"
                  @change="getStatus"
                >
                  <el-option
                    v-for="item in sideList"
                    :key="item.sideType"
                    :label="item.sideType"
                    :value="item.sideType"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="产品名">{{ form.product }}</el-form-item>
              <el-form-item label="软件名">{{ form.program }}</el-form-item>
              <el-form-item label="软件版本">{{
                form.productVer
              }}</el-form-item>
              <el-form-item label="BOM版本">{{ form.bomVer }}</el-form-item>
            </el-form>
            <div v-show="form.order !== ''" class="qrcode">
              <vue-qr
                :text="form.order"
                :margin="0"
                colorDark="#000000"
                colorLight="#fff"
                :logoScale="0.3"
                :size="150"
              ></vue-qr>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <div class="box">
          <div class="box-top">
            <!-- <el-col :span="12"> -->
            <div class="box-top-left">
              <div class="box-content">
                <div class="box-header">
                  <!-- <span>清除</span> -->
                  <div @click="handleCheckAllChange(1)">
                    {{ lineCheck1 ? "取消全选" : "全选" }}
                  </div>
                </div>
                <el-card shadow="always" :body-style="{ padding: '15px' }">
                  <el-checkbox-group
                    v-model="checkedLine1"
                    @change="handleCheckedChange(checkedLine1, 1)"
                    style="display: flex; align-items: center"
                  >
                    <div class="box-content-bottom">
                      <el-checkbox
                        disabled
                        v-for="(item, index) in lineData1"
                        :label="item"
                        :key="item.id"
                      >
                        <div class="list-content">
                          <div class="light">
                            设备<i
                              class="icon"
                              :style="{
                                background:
                                  item.equipment == '1' ? '#5ab059' : 'red',
                              }"
                            ></i>
                          </div>
                          <div
                            class="light"
                            :style="{
                              opacity:
                                form.lineName === 'Line1' && index === 2
                                  ? 0
                                  : 1,
                            }"
                          >
                            轨道<i
                              class="icon"
                              :style="{
                                background:
                                  item.orbit == '1' ? '#5ab059' : 'red',
                              }"
                            ></i>
                          </div>
                          <span class="mc">{{ item.name }}</span>
                        </div>
                      </el-checkbox>
                    </div>
                    <div class="QuestBox">
                      <div v-if="questStatus1 === 'OK'" class="okQuest">
                        换线成功
                      </div>
                      <div v-if="questStatus1 === 'NG'" class="NGQuest">
                        换线失败
                      </div>
                    </div>
                  </el-checkbox-group>
                </el-card>
              </div>
              <div class="box-content">
                <div class="box-header">
                  <!-- <span>清除</span> -->
                  <div @click="handleCheckAllChange(2)">
                    {{ lineCheck2 ? "取消全选" : "全选" }}
                  </div>
                </div>
                <el-card shadow="always" :body-style="{ padding: '15px' }">
                  <el-checkbox-group
                    v-model="checkedLine2"
                    @change="handleCheckedChange(checkedLine2, 2)"
                    style="display: flex; align-items: center"
                  >
                    <div class="box-content-bottom">
                      <el-checkbox
                        disabled
                        v-for="item in lineData2"
                        :label="item"
                        :key="item.id"
                      >
                        <div class="list-content">
                          <div class="light">
                            设备<i
                              class="icon"
                              :style="{
                                background:
                                  item.equipment == '1' ? '#5ab059' : 'red',
                              }"
                            ></i>
                          </div>
                          <div class="light">
                            轨道<i
                              class="icon"
                              :style="{
                                background:
                                  item.orbit == '1' ? '#5ab059' : 'red',
                              }"
                            ></i>
                          </div>
                          <span class="mc">{{ item.name }}</span>
                        </div>
                      </el-checkbox>
                    </div>
                    <div class="QuestBox">
                      <div v-if="questStatus2 === 'OK'" class="okQuest">
                        换线成功
                      </div>
                      <div v-if="questStatus2 === 'NG'" class="NGQuest">
                        换线失败
                      </div>
                    </div>
                  </el-checkbox-group>
                </el-card>
              </div>
              <div class="box-content">
                <div class="box-header">
                  <!-- <span>清除</span> -->
                  <div @click="handleCheckAllChange(3)">
                    {{ lineCheck3 ? "取消全选" : "全选" }}
                  </div>
                </div>
                <el-card shadow="always" :body-style="{ padding: '15px' }">
                  <el-checkbox-group
                    v-model="checkedLine3"
                    @change="handleCheckedChange(checkedLine3, 3)"
                    style="display: flex; align-items: center"
                  >
                    <div class="box-content-bottom">
                      <el-checkbox
                        disabled
                        v-for="item in lineData3"
                        size=""
                        :label="item"
                        :key="item.id"
                      >
                        <div class="list-content">
                          <div class="light">
                            设备<i
                              class="icon"
                              :style="{
                                background:
                                  item.equipment == '1' ? '#5ab059' : 'red',
                              }"
                            ></i>
                          </div>
                          <div class="light">
                            轨道<i
                              class="icon"
                              :style="{
                                background:
                                  item.orbit == '1' ? '#5ab059' : 'red',
                              }"
                            ></i>
                          </div>
                          <span class="mc">{{ item.name }}</span>
                        </div>
                      </el-checkbox>
                    </div>
                    <div class="QuestBox">
                      <div v-if="questStatus3 === 'OK'" class="okQuest">
                        换线成功
                      </div>
                      <div v-if="questStatus3 === 'NG'" class="NGQuest">
                        换线失败
                      </div>
                    </div>
                  </el-checkbox-group>
                </el-card>
              </div>
            </div>
            <!-- </el-col> -->
            <!-- <div class="box-top-right">
              <div class="">
                <span style="font-size: 12px; color: #333">历史记录</span>
                <el-card shadow="always" :body-style="{ padding: '10 px' }">
                  <div class="tongzi">
                    <div>
                      <span style="color: #666; font-size: 14px"
                        >2023-11-13</span
                      >
                      <div>一条记录内容</div>
                    </div>
                    <div>
                      <span style="color: #666; font-size: 14px"
                        >2023-11-12</span
                      >
                      <div>一条记录内容</div>
                    </div>
                    <div>
                      <span style="color: #666; font-size: 14px"
                        >2023-11-11</span
                      >
                      <div>一条记录内容</div>
                    </div>
                  </div>
                </el-card>
              </div>
            </div> -->
          </div>

          <div class="box-bottom">
            <!-- <el-button type="primary" @click="changeOver()" round>换线请求</el-button> -->
            <div class="change-button" @click="changeOver(1)">换线请求</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      :show-close="cancellation"
      custom-class="vertical-centered"
    >
      <el-carousel
        ref="carousel"
        arrow="never"
        indicator-position="none"
        height="80vh"
        :interval="4000"
        v-if="dialogVisible"
        @mouseenter.native="delHandleMouseEnter()"
      >
        <el-carousel-item
          v-for="(item, index) in pic1"
          :key="item.img"
          class="carousel"
        >
          <div class="remind">
            <div class="num">{{ index + 1 }}</div>
            <img :src="item.img" alt="" />
          </div>
          <!-- <img :src="item.img" alt="" class="remind" /> -->
        </el-carousel-item>
      </el-carousel>
      <!-- <el-form  label-width="auto">
        <el-form-item label="1.">
          <div>正确选择工单，线别，SIDE;</div>
        </el-form-item>
        <el-form-item label="2.">
          <div>当前设备不处于工作状态，当前无PCB在设备与轨道上;</div>
        </el-form-item>
        <el-form-item label="3.">
            <div>
              Laser: 设备处于通用平面打标界面
            </div>
            <div>
              Printer:设备处于主界面 
            </div>
            <div>
              SPI:设备处于主界面
            </div>
            <div>
              
              <el-form  label-width="auto">
        <el-form-item label="Mounter:">
            <div>
              (1)设备处于主界面，切换成“新规模式”
            </div>
            <div>
              (2)设备处于生产模式
            </div>
        </el-form-item>
              </el-form>
            </div>
            <div>
              M-AOI:设备处于主界面
            </div>
            <div>
              Reflow:设备处于自动模式界面
            </div>
            <div>
              S-AOI:设备处于主界面
            </div>
            <div>
              ICT:设备处于手动界面
            </div>
        </el-form-item>
      </el-form> -->
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible2"
      width="80%"
      :show-close="cancellation2"
      custom-class="vertical-centered"
    >
      <el-carousel
        ref="carousel"
        arrow="never"
        indicator-position="none"
        height="80vh"
        :interval="4000"
        v-if="dialogVisible2"
        @mouseenter.native="delHandleMouseEnter()"
      >
        <el-carousel-item
          v-for="(item, index) in pic2"
          :key="item.img"
          class="carousel"
        >
          <div class="remind">
            <div class="num">{{ index + 1 }}</div>
            <img :src="item.img" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible3"
      width="80%"
      :show-close="cancellation3"
      custom-class="vertical-centered"
    >
      <el-carousel
        ref="carousel"
        arrow="never"
        indicator-position="none"
        height="80vh"
        :interval="4000"
        v-if="dialogVisible3"
        @mouseenter.native="delHandleMouseEnter()"
      >
        <el-carousel-item
          v-for="(item, index) in pic3"
          :key="item.img"
          class="carousel"
        >
          <div class="remind">
            <div class="num">{{ index + 1 }}</div>
            <img :src="item.img" alt="" />
          </div>
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
  </div>
</template>

<script>
import {
  getChangeOverOrder,
  getChangeOverOrderInfor,
  getChangeOverStatus,
  changeoverRequests,
} from "@/api/all";
import "@/utils/protocolcheck.js";
import vueQr from "vue-qr";
export default {
  components: {
    vueQr,
  },
  data() {
    return {
      form: {
        order: "",
        lineName: "",
        side: "",
        product: "产品名",
        program: "软件名",
        bomVer: "BOM版本",
        productVer: "软件版本",
      },
      sideList: [
        {
          sideType: "TOP",
        },
        {
          sideType: "BOT",
        },
      ],
      lineList: [
        {
          id: 1,
          lineType: "Line1",
        },
        {
          id: 2,
          lineType: "Line2",
        },
        {
          id: 3,
          lineType: "Line3",
        },
      ],
      workOrderList: [],
      lineData: [
        {
          id: 1,
          name: "Laser",
          equipment: "0",
          orbit: "0",
        },
        {
          id: 2,
          name: "Printer",
          equipment: "0",
          orbit: "0",
        },
        {
          id: 3,
          name: "SPI",
          equipment: "0",
          orbit: "0",
        },
        {
          id: 4,
          name: "Mounter",
          equipment: "0",
          orbit: "0",
        },
        {
          id: 5,
          name: "M-AOI",
          equipment: "0",
          orbit: "0",
        },
        {
          id: 6,
          name: "Reflow",
          equipment: "0",
          orbit: "0",
        },
        {
          id: 7,
          name: "S-AOI",
          equipment: "0",
          orbit: "0",
        },
        {
          id: 8,
          name: "ICT",
          equipment: "0",
          orbit: "0",
        },
      ],
      checkedLine1: [],
      checkedLine2: [],
      checkedLine3: [],
      lineCheck1: false,
      lineCheck2: false,
      lineCheck3: false,
      statusData: [],
      questStatus1: "",
      questStatus2: "",
      questStatus3: "",
      dialogVisible: false,
      cancellation: false,
      dialogVisible2: false,
      cancellation2: false,
      dialogVisible3: false,
      cancellation3: false,
      pic1: [
        {
          img: require("@/assets/remind/模块一(1).jpg"),
        },
        {
          img: require("@/assets/remind/模块一(2).jpg"),
        },
        {
          img: require("@/assets/remind/模块一(3).jpg"),
        },
        {
          img: require("@/assets/remind/模块一(4).jpg"),
        },
      ],
      pic2: [
        {
          img: require("@/assets/remind/模块二(1).jpg"),
        },
        {
          img: require("@/assets/remind/模块二(2).jpg"),
        },
        {
          img: require("@/assets/remind/模块二(3).jpg"),
        },
      ],
      pic3: [
        {
          img: require("@/assets/remind/模块三(1).jpg"),
        },
        {
          img: require("@/assets/remind/模块三(2).jpg"),
        },
        {
          img: require("@/assets/remind/模块三(3).jpg"),
        },
        {
          img: require("@/assets/remind/模块三(4).jpg"),
        },
      ],
      schedule: [],
    };
  },
  created() {
    getChangeOverOrder().then(({ data }) => {
      this.workOrderList = data.WorkOrderList;
      // console.log(this.workOrderList);
    });
  },
  computed: {
    lineData1() {
      return this.lineData.filter((item, index) => index < 3);
    },
    lineData2() {
      return this.lineData.filter((item, index) => index > 2 && index < 5);
    },
    lineData3() {
      return this.lineData.filter((item, index) => index > 4);
    },
  },
  mounted() {
    // console.log(this.$refs.ElCarousel);
    // this.$refs.carousel.forEach((item, index) => {
    //   this.$refs.carousel[index].handleMouseEnter = () => {}
    // })
  },
  methods: {
    change(order) {
      this.form = {
        ...this.form,
        lineName: "",
        side: "",
      };
      this.checkedLine1 = [];
      this.checkedLine2 = [];
      this.checkedLine3 = [];
      this.questStatus1 = "";
      this.questStatus2 = "";
      this.questStatus3 = "";
      getChangeOverOrderInfor({
        workOrder: order,
      }).then(({ data }) => {
        // console.log(data);
        this.form = {
          ...this.form,
          lineName: "",
          side: "",
          product: data.Product,
          program: data.Name,
          bomVer: data.BomVer,
          productVer: data.SoftVer,
        };
      });
      this.initialize();
    },
    // changeOver() {
    //   let choice = [false, false, false];
    //   this.dataProcessing().mcIDList.forEach((item) => {
    //     if (item.mcId >= 1 && item.mcId <= 3) {
    //       choice[0] = true;
    //     } else if (item.mcId >= 4 && item.mcId <= 6) {
    //       choice[1] = true;
    //     } else if (item.mcId >= 7 && item.mcId <= 8) {
    //       choice[2] = true;
    //     }
    //   });
    //   if (this.form.side != "" && this.form.lineName !== "") {
    //     let data = this.dataProcessing();
    //     if (data.mcIDList.length !== 0) {
    //       // console.log(data);
    //       this.startLoading();
    //       changeoverRequests(data)
    //         .then((res) => {
    //           this.endLoading();
    //           if (res.data.Status == "NG") {
    //             this.questStatus1 = choice[0] ? "NG" : "";
    //             this.questStatus2 = choice[1] ? "NG" : "";
    //             this.questStatus3 = choice[2] ? "NG" : "";
    //             this.$alert(res.data.Message, "错误信息", {
    //               confirmButtonText: "确定",
    //               callback: () => {
    //                 this.$message({
    //                   type: "error",
    //                   message: "换线请求失败",
    //                 });
    //               },
    //             });
    //             this.initialize();
    //           } else {
    //             this.questStatus1 = choice[0] ? "OK" : "";
    //             this.questStatus2 = choice[1] ? "OK" : "";
    //             this.questStatus3 = choice[2] ? "OK" : "";
    //             this.getStatus(this.form.lineName);
    //           }
    //           this.checkedLine1 = [];
    //           this.checkedLine2 = [];
    //           this.checkedLine3 = [];
    //         })
    //         .catch((error) => {
    //             this.questStatus1 = "";
    //             this.questStatus2 = "";
    //             this.questStatus3 = "";
    //           this.endLoading();
    //           this.$alert(error, "错误信息", {
    //             confirmButtonText: "确定",
    //           });
    //         });
    //     } else {
    //       this.$message({
    //         message: "请选择更换的线",
    //         type: "warning",
    //       });
    //     }
    //   } else {
    //     this.$message.error("请先完成线和SIDE的选择");
    //   }
    // },
    changeOver(num) {
      if (num === 1) {
        this.questStatus1 = "";
        this.questStatus2 = "";
        this.questStatus3 = "";
      }
      if (true) {
        let data = this.dataProcessing();
        if (data.mcIDList.length !== 0) {
          console.log({ ...data, mcIDList: [data.mcIDList[num - 1]] });
          this.startLoading();
              let lastDigitAsString = String(data.mcIDList[num - 1].mcId).charAt(
                String(data.mcIDList[num - 1].mcId).length - 1
              );
              let lastDigit = parseInt(lastDigitAsString, 10);
          changeoverRequests({ ...data, mcIDList: [data.mcIDList[num - 1]] })
            .then((res) => {
              this.endLoading();
              if (res.data.Status == "NG") {
                console.log(lastDigit);
                if (lastDigit < 4) {
                  this.questStatus1 = "NG";
                } else if (
                  lastDigit > 3 &&
                  lastDigit < 6
                ) {
                  this.questStatus1 =
                    this.checkedLine1.length === 0 ? "" : "OK";
                  this.questStatus2 = "NG";
                } else if (
                  lastDigit > 5 &&
                  lastDigit < 9
                ) {
                  this.questStatus1 =
                    this.checkedLine1.length === 0 ? "" : "OK";
                  this.questStatus2 =
                    this.checkedLine2.length === 0 ? "" : "OK";
                  this.questStatus3 = "NG";
                }
                this.checkedLine1 = [];
                this.checkedLine2 = [];
                this.checkedLine3 = [];
                this.initialize();
                this.$alert(res.data.Message, "错误信息", {
                  confirmButtonText: "确定",
                  callback: () => {
                    this.$message({
                      type: "error",
                      message: "换线请求失败",
                    });
                  },
                });
              } else {
                  console.log(num === data.mcIDList.length,this.checkedLine1.length,this.checkedLine2.length,this.checkedLine3.length);
                if (num !== data.mcIDList.length) {
                  this.changeOver(num + 1);
                } else if (num === data.mcIDList.length) {
                  this.questStatus1 =
                    this.checkedLine1.length === 0 ? "" : "OK";
                  this.questStatus2 =
                    this.checkedLine2.length === 0 ? "" : "OK";
                  this.questStatus3 =
                    this.checkedLine3.length === 0 ? "" : "OK";
                  this.checkedLine1 = [];
                  this.checkedLine2 = [];
                  this.checkedLine3 = [];
                  this.getStatus(this.form.lineName);
                }
              }
            })
            .catch((error) => {
              console.log(lastDigit);
              if (lastDigit < 4) {
                this.questStatus1 = "NG";
              } else if (
                lastDigit > 3 &&
                lastDigit < 6
              ) {
                this.questStatus1 = this.checkedLine1.length === 0 ? "" : "OK";
                this.questStatus2 = "NG";
              } else if (
                lastDigit > 5 &&
                lastDigit < 9
              ) {
                this.questStatus1 = this.checkedLine1.length === 0 ? "" : "OK";
                this.questStatus2 = this.checkedLine2.length === 0 ? "" : "OK";
                this.questStatus3 = "NG";
              }
              this.checkedLine1 = [];
              this.checkedLine2 = [];
              this.checkedLine3 = [];
              this.endLoading();
              this.$alert(error, "错误信息", {
                confirmButtonText: "确定",
              });
            });
        } else {
          this.$message({
            message: "请选择更换的线",
            type: "warning",
          });
        }
      } else {
        this.$message.error("请先完成线和SIDE的选择");
      }
    },
    delHandleMouseEnter() {
      this.$refs.carousel.handleMouseEnter = () => {};
    },
    closeCancellation1() {
      this.$nextTick(() => {
        this.$refs.carousel.handleMouseEnter = () => {};
      });
      this.cancellation = false;
      this.dialogVisible = true;
      setTimeout(() => {
        this.cancellation = true;
      }, 16000);
    },
    closeCancellation2() {
      this.$nextTick(() => {
        this.$refs.carousel.handleMouseEnter = () => {};
      });
      this.cancellation2 = false;
      this.dialogVisible2 = true;
      setTimeout(() => {
        this.cancellation2 = true;
      }, 12000);
    },
    closeCancellation3() {
      this.$nextTick(() => {
        this.$refs.carousel.handleMouseEnter = () => {};
      });
      this.cancellation3 = false;
      this.dialogVisible3 = true;
      setTimeout(() => {
        this.cancellation3 = true;
      }, 16000);
    },
    getStatus(value) {
      if (
        this.form.order === "" ||
        this.form.lineName === "" ||
        this.form.side === ""
      ) {
        this.initialize();
        return;
      }
      let numberID = this.form.lineName.replace(/[^\d]/g, "") * 100 + 1;
      // switch (value.lineType) {
      //   case "Line1":
      this.lineData = this.lineData.map((item, index) => {
        return {
          ...item,
          id: numberID + index,
        };
      });
      //     break;
      //   case "Line2":
      //     this.lineData = this.lineData.map((item, index) => {
      //       return {
      //         ...item,
      //         id: 201 + index,
      //       };
      //     });
      //     break;
      //   case "Line3":
      //     this.lineData = this.lineData.map((item, index) => {
      //       return {
      //         ...item,
      //         id: 301 + index,
      //       };
      //     });
      //     break;
      // }
      // console.log(this.statusData);
      console.log(this.form);

      let a = this.lineList.find(
        ({ lineType }) => lineType == this.form.lineName
      );
      getChangeOverStatus(this.form).then((res) => {
        // console.log(res);
        this.statusData = res.data.DetailList;
        this.lineData = this.lineData.map((item, index) => {
          // console.log(index);
          return {
            ...item,
            equipment: this.statusData[index]
              ? this.statusData[index].McIdStatus
              : 0,
            orbit: this.statusData[index]
              ? this.statusData[index].ConverConveyorStatus
              : 0,
          };
        });
      });
    },
    initialize() {
      this.lineData = this.lineData.map((item, index) => {
        // console.log(index,item);
        return {
          ...item,
          equipment: 0,
          orbit: 0,
        };
      });
    },

    dataProcessing() {
      let lineArr = [
        ...this.checkedLine1,
        ...this.checkedLine2,
        ...this.checkedLine3,
      ];
      lineArr = lineArr.map((item) => {
        return {
          mcId: item.id,
          mcName: item.name,
          action: "Q",
        };
      });
      let result = { ...this.form, mcIDList: lineArr };
      return result;
    },
    handleCheckAllChange(num) {
      if (num == 1) {
        this.lineCheck1 = !this.lineCheck1;
        this.checkedLine1 = this.lineCheck1 ? this.lineData1 : [];
        if (this.lineCheck1) {
          this.closeCancellation1();
        }
      }
      if (num == 2) {
        this.lineCheck2 = !this.lineCheck2;
        this.checkedLine2 = this.lineCheck2 ? this.lineData2 : [];
        if (this.lineCheck2) {
          this.closeCancellation2();
        }
      }
      if (num == 3) {
        this.lineCheck3 = !this.lineCheck3;
        this.checkedLine3 = this.lineCheck3 ? this.lineData3 : [];
        if (this.lineCheck3) {
          this.closeCancellation3();
        }
      }
      console.log(this.dataProcessing());
    },
    handleCheckedChange(value, a) {
      if (a == 1) {
        this.lineCheck1 = value.length === this.lineData1.length;
      }
      if (a == 2) {
        this.lineCheck2 = value.length === this.lineData2.length;
      }
      if (a == 3) {
        this.lineCheck3 = value.length === this.lineData3.length;
      }
    },
    startLoading() {
      this.loading = this.$loading({
        lock: true,
        text: "换线中~",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.2)", //调节透明度
      });
    },
    endLoading() {
      this.loading.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.left-box {
  // padding: 20px 0;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 152px);
}
.qrcode {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 110px);
  padding: 20px 30px;
  background: #f1f4f9;
}
.box-top {
  flex: 1;
  width: 100%;
  height: calc(100vh - 110px - 20vh);
  display: flex;
  justify-content: center;
  gap: 30px;
  .box-top-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 380px;
    gap: 5vh;
    height: calc(100vh - 110px - 20vh);
    // flex: 1;
  }
  // .box-top-right {
  //   flex: 1;
  //   display: flex;
  //   flex-direction: column;
  //   gap: 30px;
  //   height: calc(100vh - 100px -20vh);
  // }
}
.box-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20vh;

  .change-button {
    padding: 8px 50px;
    text-align: center;
    border-radius: 999px;
    font-weight: bold;
    font-size: 2vh;
    letter-spacing: 2px;
    color: #fff;
    background-color: #1f4cc1;
    cursor: pointer;
  }
}
.box-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  .box-header {
    padding-right: 5px;
    display: flex;
    justify-content: flex-end;
    gap: 5px;
    // justify-content: end;
    font-size: 2vh;
    cursor: pointer;
  }
}
.box-content-bottom {
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2vh; //50
  .box-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.list-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5vw; //50px
  font-size: 2vh;

  .mc {
    font-weight: bold;
    font-size: 2.6vh;
    margin-left: 5px;
  }
  .light {
    display: flex;
    gap: 1vw;
    align-items: center;
    .icon {
      display: inline-block;
      border-radius: 999px;
      width: 2vh;
      height: 2vh;
      background: red;
    }
  }
}
.active {
  background: #5ab059;
}
.tongzi {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 400px;
  overflow: auto;
}
.tongzi::-webkit-scrollbar {
  display: none;
}

.QuestBox {
  width: 14rem;
}

.okQuest {
  width: 13rem;
  color: rgb(0, 197, 0);
  font-size: 3rem;
  border: 3px solid rgb(0, 197, 0);
  text-align: center;
}

.NGQuest {
  width: 13rem;
  color: red;
  font-size: 3rem;
  border: 3px solid red;
  text-align: center;
}

.dialogVisible {
}
::v-deep .el-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
}
::v-deep .el-dialog .el-dialog__body {
  flex: 1;
  overflow: auto;
}

.remind {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }

  .num {
    font-size: 4rem;
    color: red;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
