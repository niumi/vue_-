<template>
  <div>
    <div class="start">
      <div class="start-img">
        <img src="../../assets/imges/start/logo.png" alt />
      </div>
    </div>
    <div class="start-title">美丽由你开启</div>
  </div>
</template>
<script>
import Carousel from "../../components/Carousel/Carousel.vue";
export default {
  name: "start",
  components: { Carousel },
  data() {
    return {
      banners: []
    };
  },
  mounted() {
    const timer = setTimeout(() => {
      this.$router.push("/yindao");
    }, 2000);
  }
};
</script>
<style lang="less" scoped>
.start {
  position: fixed;
  top: 0;
  bottom: 1rem;
  left: 0;
  right: 0;
  background: rgb(255, 64, 111);
  .start-img {
    width: 3rem;
    margin: 0 auto;
    margin-top: 5rem;
    img {
      width: 100%;
    }
  }
}
.start-title {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: #aaa;
  font-size: 18px;
}
</style>