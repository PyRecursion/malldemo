<template>
  <div>
    <NavBar class="navbar"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners" />
    <RecommendView :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./homeSwiper/HomeSwiper";
import RecommendView from "./recommendView.vue/RecommendView";
//请求数据
import { getHomeMultidata } from "../../api/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends:[]
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data.banner.list)
        this.banners = res.data.banner.list;
        this.recommends=res.data.recommend.list;
      });
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: pink;
}
</style>