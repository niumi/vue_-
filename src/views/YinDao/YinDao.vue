<template>
  <div id="yindao">
    <div class="yindao-banner">
      <Carousel :banners="banners"/>
      <router-link to="/home">
        <span class="start">开启</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "yindao",
  data() {
    return {
      banners: [
        {
          src: require("../../assets/imges/yindao/1.png"),
          change: require("../../assets/imges/yindao/2.png"),
          effect: "bounce"
        },
        {
          src: require("../../assets/imges/yindao/1.png"),
          change: require("../../assets/imges/yindao/2.png"),
          effect: "bounceInLeft"
        },
        {
          src: require("../../assets/imges/yindao/1.png"),
          change: require("../../assets/imges/yindao/2.png"),
          effect: "bounceInUp"
        }
      ]
    };
  },
  mounted() {
    // this.$api.getYinDao().then(res => {
    //   console.log(res.data);
    // });
  }
};
</script>
<style lang="less" scoped>
#yindao {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgb(255, 64, 111);
  .yindao-banner {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
  }
  .start {
    color: #fff;
    border: 1px solid #fff;
    border-radius: 15px;
    padding: 5px 10px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -0.8rem;
  }
}
</style>
