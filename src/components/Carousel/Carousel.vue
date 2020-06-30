<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in banners" :key="index" class="carousel">
        <div class="carousel-img">
          <img :src="item.src" alt />
        </div>
        <div :class="`carousel-change wow animated ${item.effect}`">
          <img :src="item.change" alt />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" style="bottom:20px"></div>
    </swiper>
  </div>
</template>
<script>
import "animate.css";
import { WOW } from "wowjs";
export default {
  name: "Carousel",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        on: {
          slideChangeTransitionEnd: function(swiper) {
            this.index = this.activeIndex;
            var wow = new WOW({
              live: false
            });
            wow.init();
          }
        }
      }
    };
  },
  props: ["banners"],
  mounted() {
    var options = {
      live: false
    };
    var wow = new WOW(options);
    wow.init();
  }
};
</script>
<style lang="less" scoped>
.carousel {
  .carousel-img {
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
  .carousel-change {
    width: 120%;
    margin: 0 auto;
    position: absolute;
    top: 3.2rem;
    left: -0.56rem;
    img {
      width: 100%;
    }
  }
}
</style>

