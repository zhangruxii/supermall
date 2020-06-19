<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="center">购物街</div>
  </nav-bar>
  <swiper :cbanner="banner"></swiper>
  <recomment-view :recommends="recommends"></recomment-view>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMltidata} from 'network/Home'
import Swiper from 'views/home/childComps/Swiper'
import RecommentView from 'views/home/childComps/RecommentView'

export default {
  name: "Home",
  components:{
    NavBar,
    Swiper,
    RecommentView
  },
  data() {
    return {
      // result:null
      banner:[],
      recommends:[]
    }
  },
  created() {
    //请求数据
    getHomeMltidata().then(res => {
      //console.log(res);
      // this.result = res.data
      this.banner = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
}
</script>

<style scoped>
  .home-nav {
    background-color: #dd147e;
    color: white;
  }
</style>