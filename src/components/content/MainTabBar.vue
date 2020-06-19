<template>
<tab-bar>
      <tab-bar-item path="/home" activeColor='#dd147e'>
        <i class="iconfont iconfaxian-copy" slot="item-icon"></i>
        <i slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconoA"></use>
          </svg>
        </i>
        <p slot="item-text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor='#dd147e'>
        <i class="iconfont iconfenlei" slot="item-icon"></i>
        <i slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconfenlei-"></use>
          </svg>
        </i>
        <p slot="item-text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor='#dd147e'>
        <i class="iconfont icongouwuchekong" slot="item-icon"></i>
        <i slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icontianchongxing-"></use>
          </svg>
        </i>
        <p slot="item-text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor='#dd147e'>
        <i class="iconfont iconwode" slot="item-icon"></i>
        <i slot="item-icon-active">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconwode1"></use>
          </svg>
        </i>
        <p slot="item-text">我的</p>
      </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from 'components/common/tabar/tabar'
import TabBarItem from 'components/common/tabar/TabBarItem'
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  },
  data () {
    return {
    };
  }
}
</script>
<style scoped>
</style>