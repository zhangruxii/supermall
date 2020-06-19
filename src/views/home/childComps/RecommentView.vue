<template>
<div class="recommends">
  <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>
<script>
export default {
  name: "RecommentView",
  props:{
    recommends:{
      type:Array
    }
  },
  data () {
    return {
    };
  }
}
</script>
<style scoped>
.recommends{
  display: flex;
  text-align: center;
  font-size: 12px;
  /* width: 100%; */
  padding: 15px 0 20px;
  border-bottom: 8px solid #eee;

}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 6px;
}
</style>