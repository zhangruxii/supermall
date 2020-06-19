<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Tabar",
  data () {
    return {
    };
  }
}
</script>
<style scoped>
   #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 8px rgba(100, 100, 100, 0.2);
  }
  /* .iconfont {
    height: 20px;
    width: 20px;
  } */
</style>