/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div class="home">
    <div :class="{ mark: markB }" v-if="$store.state.counter">
      <hello-world
        :class="{
          'hello-world': active === 1,
          'two-hello': active === 2,
        }"
      />
      <img
        :src="srcList[active - 1]"
        :class="{ oneStep: active === 1, twoStep: active === 2 }"
      />
    </div>
    <div class="list-box">
      <div v-for="(item, index) in textArr" class="list-box-item" :key="index">
        {{ item }}
      </div>
      {{ $store.state.counter }}
    </div>
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
      // active: null,
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
  mounted() {
    this.$store.commit("changeNumber");
  },

  computed: {
    active() {
      this.fn();
      return this.$store.state.counter;
    },
  },

  methods: {
    fn() {
      if (this.$store.state.counter === 3) {
        this.$router.push("/about");
      }
    },
  },
};
</script>
<style>
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
.hello-world {
  position: absolute;
  top: 30px;
  left: 330px;
}
.two-hello {
  position: absolute;
  top: 30px;
  left: 410px;
}

.oneStep {
  width: 308px;
  position: absolute;
  top: 62.4px;
  left: 11px;
}

.twoStep {
  width: 75px;
  height: 30px;
  position: absolute;
  top: 62.4px;
  left: 324px;
}
</style>
