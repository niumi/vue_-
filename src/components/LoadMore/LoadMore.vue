<template>
  <div>
    <div id="loadmore" ref="loadmore">数据加载中</div>
  </div>
</template>
<script>
export default {
  name: "LoadMore",
  mounted() {
    let timer = null;
    window.onscroll = () => {
      // 视口高度
      const winHeight = document.documentElement.clientHeight;
      // console.log(winHeight);
      // DOM元素距离顶部的高度
      const divHeight = this.$refs.loadmore.getBoundingClientRect().top;
      // console.log(divHeight);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (divHeight < winHeight) {
          this.$parent.http();
        }
      }, 100);
    };
  },
  destroyed(){
    window.onscroll = null;
  }
};
</script>
<style lang="less" scoped>

</style>
