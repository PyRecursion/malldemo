<template>
  <div class="recommends">
    <div class="recommend" v-for="item in recommends" :key="item.acm">
      <a :href="item.link">
        <img class="recommend-image" :src="item.image" :alt="item.acm" />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
  
<style scoped>
  .recommends{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .recommend{
    flex: 1;
  }
  .recommend-image{
    width: 70px;
    height: 70px;
  }
</style>