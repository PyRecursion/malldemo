<template>
  <div id="nav-bar">
    <div class="navbar-left"><slot name="left"></slot></div>
    <div class="navbar-center"><slot name="center"></slot></div>
    <div class="navbar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  #nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 0 15px 0 rgba(31,56,88,0.08);
  }
  .navbar-left{
    width: 25%;
    height: 100%;
    background-color: aqua
  }
  .navbar-center{
    width:50%;
    height: 100%;
    background-color:bisque;
  }
  .navbar-right{
    width: 25%;
    height: 100%;
    background-color:red;
  }
</style>
