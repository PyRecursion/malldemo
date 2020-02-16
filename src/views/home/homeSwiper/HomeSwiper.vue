<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" :alt="item.acm" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
  components: {
    Swiper,
    SwiperItem
  },
  created(){
    console.log(222,this.banners)
  }
  
};
</script>

<style scoped>
</style>