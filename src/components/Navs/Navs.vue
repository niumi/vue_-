<template>
  <div class="nav">
    <div class="nav-empty"></div>
    <div class="nav-top">
      <span class="top-nav-left iconfont clear-fix" @click="searchHandler">&#xe61c;</span>
      <p v-for="(ele,index) in title" :key="index" class="title" @click="getIndex(index)">{{ele}}</p>
      <span class="top-nav-right iconfont clear-fix" @click="setupHandler">&#58913;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navs",
  props: ["title"],
  methods: {
    getIndex(index) {
      // console.log(index);
      this.$emit("tabIndex",index)
    },
    // 放大镜跳转
    searchHandler() {
      this.$router.push({
        path: "/homesearch"
      });
    },
    //跳转到设置页面
    setupHandler (){
      this.$router.push({
        path:'/setDetails'
      });
    }
  }
};
</script>
<style lang="less">
.nav {
  position: relative;
  padding-bottom: 1.4rem;
  .nav-empty {
    width: 100%;
    height: 3.1rem;
    background-color: #f93f6c;
    position: absolute;
    z-index: -1;
  }
  .nav-top {
    width: 100%;
    height: 1.4rem;
    color: #fff;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    span {
      flex: 1;
      cursor: pointer;
      font-size: 20px;
    }
    .top-nav-left{
      padding-left: .3rem;
    }
    .top-nav-right{
      padding-right: .3rem;
    }
    .title {
      flex: 7;
    }
  }
}
</style>
