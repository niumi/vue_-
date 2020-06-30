<template>
    <div class="nav-top">
      <div id="nav">
        <router-link to="/home">首页</router-link>|
        <router-link to="/find">发现</router-link>
        <router-link to="/sort">分类</router-link>
        <router-link to="/mine">我的</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "Router",
};
</script>
<style lang="less" scoped>
.nav-top {
  width: 100%;
  height: 0;
  padding-top: 1.08rem;
  #nav {
    width: 100%;
    height: 1.08rem;
    line-height: 1.08rem;
    color: #ccc;
    font-size: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid rgb(255, 64, 111);
    background-color: #fff;
  }
  #nav a {
    display: inline-block;
    width: 25%;
    font-size: 0.4rem;
    text-align: center;
    color: #000;
  }
  #nav .active {
    color: rgb(255, 64, 111) !important;
  }
}
</style>
