<template>
  <div class="home">
    <div v-if="$route.query.boot">
      <!-- 遮罩 -->
      <div
        :class="{ mark: markB, 'com-mark': dialog }"
        v-if="$route.query.boot"
      ></div>
      <!-- 图片 -->
      <img
        :src="srcList[active]"
        :class="{
          'com-mark': dialog,
          oneStep: active === 0,
          twoStep: active === 1,
        }"
      />
      <!-- 图片 -->
      <!-- 遮罩 -->
      <!-- 引导组件  -->
      <hello-world
        @close="close"
        :arrow="arrow"
        :class="{
          'hello-world': active === 0,
          'two-hello': active === 1,
        }"
      />
      <!-- 引导组件  -->
    </div>
    <!-- 内容 -->
    <div class="list-box">
      <div v-for="(item, index) in textArr" class="list-box-item" :key="index">
        {{ item }}
      </div>
      {{ $store.state.counter }}
    </div>
    <!-- 内容 -->
    <!-- 点击x弹框 -->
    <div class="box-confirm" :class="{ 'com-mark': dialog }" v-if="dialog">
      <div class="body-content">确认要关闭吗？</div>
      <div class="footer">
        <span class="button-footer">
          <button type="button" class="cancel" @click="dialog = false">
            <span>取消</span>
          </button>
          <button type="button" class="confirm" @click="confirmClose">
            <span>确定关闭</span>
          </button>
        </span>
      </div>
    </div>
    <!-- 点击x弹框 -->
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      arrow: "left",
      dialog: false,
      markB: true,
      content: true,
      contentMark: null,
      showClone: null,
      srcList: [require("../assets/one.jpg"), require("../assets/two.jpg")],
      textArr: [
        "花自飘零bnnnnnnnnnnnnnnnnnn水自流",
        "一种相思",
        "两处闲愁",
        "此情无计可消除",
        "才下眉头",
        "却上心头",
      ],
    };
  },
  mounted() {},
  watch: {
    "$store.state.counter"(newVal) {
      if (newVal === 0) {
        this.arrow = "left";
      } else {
        this.arrow = "top";
      }
    },
    immediate: true,
  },
  computed: {
    active() {
      this.fn();
      return this.$store.state.counter;
    },
  },

  methods: {
    close() {
      this.dialog = true;
    },
    confirmClose() {
      this.$store.commit("resetNumber");
      this.$router.push("/");
    },
    fn() {
      if (this.$store.state.counter === 2) {
        this.$router.push("/about");
      }
    },
  },
};
</script>
<style scoped>
/* 高亮元素盒子 */
.list-box {
  margin-top: 60px;
}

/* 高亮元素样式 */
.list-box-item {
  list-style: none;
  background: paleturquoise;
  float: left;
  margin: 2px;
  padding: 5px;
}

/* 遮罩层 */
.mark {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  -webkit-overflow-scrolling: touch;
  background-color: rgb(0, 0, 0);
  filter: alpha(opacity=60);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 521;
}

.com-mark {
  z-index: 999;
}
.hello-world {
  position: absolute;
  top: 30px;
  left: 330px;
  z-index: 666;
}
.two-hello {
  position: absolute;
  top: 30px;
  left: 410px;
  z-index: 666;
}

.oneStep {
  width: 308px;
  position: absolute;
  top: 62.4px;
  left: 11px;
  z-index: 666;
}

.twoStep {
  width: 75px;
  height: 30px;
  position: absolute;
  top: 62.4px;
  left: 324px;
  z-index: 666;
}

.box-confirm {
  position: relative;
  margin: 0 auto 50px;
  margin-top: 15vh;
  /* top: 40px; */
  width: 500px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
  box-sizing: border-box;
}

.body-content {
  background: orange;
  height: 10px;
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
  word-break: break-all;
}

.footer {
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
</style>
