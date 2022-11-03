<template>
  <div>
    <div class="box">
      <div class="header">
        <span>新手引导</span>
        <button class="btn" @click="close">X</button>
      </div>
      <div class="body-content">{{ content }}</div>
      <div class="footer">
        <span class="button-footer">
          <button type="button" class="cancel" @click="cancel">
            <span>取消</span>
          </button>
          <button type="button" class="confirm" @click="confirm">
            <span>确定</span>
          </button>
        </span>
      </div>
    </div>
    <!-- 确认框 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      content: "",
      dialogVisible: true,
    };
  },
  created() {
    this.content = "第一步rrrrr";
    console.log(this.$store.state.counter);
  },
  watch: {
    "$store.state.counter"(newVal) {
      if (newVal == 2) {
        this.content = "第二步rrrrr";
      }
    },
    immediate: true,
  },
  methods: {
    confirm() {
      this.$store.commit("changeNumber");
    },
    cancel() {
      this.$router.push("/");
    },
    close() {
      console.log("关闭事件");
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.box {
  width: 500px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
}

.header {
  /* background: green; */
  display: flex;
  padding: 20px 20px 10px;
}
.body-content {
  background: orange;
  height: 100px;
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}
.footer {
  /* background: pink; */
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
  text-align: right;
}
.cancel {
  margin-right: 10px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  /* margin: 0; */
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.confirm {
  margin-left: 10px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  /* background: #fff; */
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  /* margin: 0; */
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.cancel:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

.confirm:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.btn {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: auto;
  width: 18px;
  color: #909399;
  font-size: 10px;
  height: 16px;
}
.btn:hover {
  color: #409eff;
}
</style>
