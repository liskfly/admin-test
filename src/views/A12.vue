<template>
  <div class="material">
    <tableTemplate :tableLabel="tableLabel" :pageTitle="title"></tableTemplate>
  </div>
</template>
  
<script>
import tableTemplate from "@/components/tableTemplate";
export default {
  components: {
    tableTemplate,
  },
  data() {
    return {
      title: "物料信息维护",
      tableLabel: [
        "物料编号",
        "物料名称",
        "物料型号",
        "采购员",
        "数量",
        "单价",
      ],
    };
  },
};
</script>
  
<style scoped lang="scss">
</style>