<template>  
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
  <!-- <div class="tab-bar-item iconfont iconfenlei">分类</div>
  <div class="tab-bar-item iconfont icongouwuchekong">购物车</div>
  <div class="tab-bar-item iconfont iconwode">我的</div> -->
</template>
<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data () {
    return {
      // isActive:false
    };
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
     activeStyle(){
       return this.isActive ? {color:this.activeColor}: {}
     }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },
}
</script>
<style scoped>
  .tab-bar-item {
  flex: 1;
  height: 49px;
  font-size: 18px;
  /* line-height: 49px; */
  background-color: #f6f6f6;
  text-align: center;
  }
  /* .active {
    color: red;
  } */
</style>