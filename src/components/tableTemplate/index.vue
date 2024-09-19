<template>
  <div class="tableTemplate">
    <el-card class="box-card">
      <div class="table_header">
        <el-button type="primary" @click="dialogVisible = true">添加</el-button>
      </div>
      <div class="table_container">
        <el-table
          :data="
            tableData.slice(
              (currentPage - 1) * pageSize,
              currentPage * pageSize
            )
          "
          max-height="500"
          border
          style="width: 100%"
        >
          <el-table-column
            v-for="(text, index) in tableLabel"
            :key="index"
            :prop="'var' + (index + 1)"
            :label="text"
          >
          </el-table-column>
          <el-table-column
            prop="EventDatetime"
            :formatter="dateFormat"
            label="创建时间"
          >
          </el-table-column>
          <el-table-column fixed="right" label="操作" min-width="120">
            <template slot-scope="scope">
              <el-button
                type="text"
                icon="el-icon-edit"
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >修改</el-button
              >
              <el-button
                type="text"
                icon="el-icon-delete"
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin-top: 15px">
          <el-pagination
            align="center"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="tableData.length"
          >
          </el-pagination>
        </div>

        <el-dialog
          title="添加信息"
          @close="addCancel()"
          :visible.sync="dialogVisible"
          width="500px"
        >
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item
              v-for="(text, index) in tableLabel"
              :key="index"
              :label="text"
            >
              <el-input
                v-model="form['Var' + (index + 1)]"
                :placeholder="'请输入' + text"
              ></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="addCancel()">取 消</el-button>
            <el-button type="primary" @click="addMaterial()">确 定</el-button>
          </span>
        </el-dialog>

        <el-dialog
          title="修改信息"
          @close="editCancel()"
          :visible.sync="editVisible"
          width="500px"
        >
          <el-form ref="editForm" :model="editForm" label-width="80px">
            <el-form-item
              v-for="(text, index) in tableLabel"
              :key="index"
              :label="text"
            >
              <el-input
                v-model="editForm['Var' + (index + 1)]"
                :placeholder="'请输入' + text"
              ></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="editCancel()">取 消</el-button>
            <el-button type="primary" @click="editMaterial()">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getMaterial, insertMaterial, reviseMaterial,deleteData } from "@/api/material";
import { xmlTagToJson, jsonToxml } from "@/utils/xmlTojson";
export default {
  props:['tableLabel','pageTitle'],
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      editVisible: false,
      currentPage: 1,
      pageSize: 5,
      total: 10,
      form: {
        Var1: "",
        Var2: "",
        Var3: "",
        Var4: "",
        Var5: "",
        Var6: "",
        Var7: "",
      },
      editForm: {},
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getMaterial(this.pageTitle).then(({ data }) => {
        this.tableData = xmlTagToJson(data, "Table");
        // console.log(this.tableData);
      });
    },
    handleEdit(index, row) {
      // console.log(row);
      this.editForm ={
        ID:row.ID,
        Var1: row.var1,
        Var2:row.var2,
        Var3: row.var3,
        Var4: row.var4,
        Var5: row.var5,
        Var6: row.var6,
        Var7: row.var7,
      }
      this.editVisible = true;
    },
    handleDelete(index,row){
      deleteData(row.ID).then(({data})=>{
        // console.log(xmlTagToJson(data, "Table"));
        this.getData();
      })
    },
    addMaterial() {
      let xmlData = jsonToxml(this.form);
      // console.log(xmlData);
      insertMaterial(xmlData,this.pageTitle).then(({ data }) => {
        // console.log(xmlTagToJson(data, "Table"));
        this.getData();
        this.dialogVisible = false;
      });
    },
    editMaterial() {
      let jsonXml = jsonToxml(this.editForm);
      // console.log(jsonXml);
      reviseMaterial(jsonXml).then(({ data }) => {
        // console.log(xmlTagToJson(data, "Table"));
        this.getData();
        this.editVisible = false;
        this.editForm = {};
      });
    },
    addCancel() {
      this.dialogVisible = false;
      this.form = {
        Var1: "",
        Var2: "",
        Var3: "",
        Var4: "",
        Var5: "",
        Var6: "",
        Var7: "",
      };
    },
    editCancel() {
      this.editVisible = false;
      this.editForm = {};
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    dateFormat(row) {
      let date = row.EventDatetime;
      return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>

<style lang="scss" scoped>
.tableTemplate {
  padding: 20px;
  .table_header {
    padding-bottom: 20px;
  }
}
</style>