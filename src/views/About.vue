<template>
  <div class="about">
    <h1>{{ $store.state.counter }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    window.addEventListener("load", () => {
      this.$router.push({
        path: "/home",
        query: {
          boot: true,
        },
      });
    });
  },
};
</script>
