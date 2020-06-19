<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/MainTabBar'
  
  export default {
    namr:'app',
    components:{
      MainTabBar
    }
  }
</script>
<style>
@import "assets/css/base.css";
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 24px;
  }
  .tab-bar-item .iconfont {
    font-size: 20px;
  }
</style>
