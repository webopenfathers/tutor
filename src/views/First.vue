<template>
  <div class="first">
    <h1>{{ $store.state.counter }}</h1>
    <button @click="next">跳转</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    next() {
      this.$router.push({
        path: "/home",
        query: {
          boot: true,
        },
      });
    },
  },
};
</script>
