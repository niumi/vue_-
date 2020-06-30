<template>
  <div class="home">
    <Navs :title="title" @tabIndex="getIndex"/>
    <HomeTabs :currentIndex="currentIndex" />
    <Router />
  </div>
</template>
<script>
import HomeTabs from "./HomeTabs/HomeTabs.vue";
export default {
  name: "home",
  data() {
    return {
      title: ["美丽推荐", "学变美"],
      currentIndex:0
    };
  },
  components: {
    HomeTabs,
  },
  methods: {
    getIndex(index){
      // console.log("home",index)
      this.currentIndex=index;
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  font-size: 16px;
}
</style>
