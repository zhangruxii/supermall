<template>
  <div class="block">
    <el-carousel height="150px" arrow="always">
      <el-carousel-item v-for="(item, index) in  cbanner" :key="index">
        <!-- <h3 class="small">{{ item.title }}</h3> -->
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: "Swiper",
  props:{
    cbanner:{
      type:Array
    }
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  /*设置图片宽度和浏览器宽度一致*/
  width: 100%;
  height: inherit;
}
</style>