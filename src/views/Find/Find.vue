<template>
  <div id="find">
    <Navs :title="title"/>
    <div class="find-top">
      <div v-for="(ele,index) in top" :key="index" class="find-top-hot clear-fix">
        <router-link :to="ele.url">
          <img :src="getChange(ele.img)" alt />
          <p>{{ele.title}}</p>
        </router-link>
      </div>
    </div>
    <div v-for="(ele,index) in list" :key="index" class="find-list">
      <p class="find-list-title">{{ele.title}}</p>
      <span>{{ele.topic}}个话题</span>
      <span>{{ele.heated}}人热议</span>
      <div class="find-img clear-fix">
        <img :src="getChange(ele.imgLeft)" alt class="img-left" />
        <img :src="getChange(ele.imgRight)" alt class="img-right" />
      </div>
    </div>
    <LoadMore />
    <Router />
  </div>
</template>
<script>
export default {
  name: "find",
  data() {
    return {
      title: ["发现"],
      top: [],
      list: []
    };
  },
  mounted() {
    //测试接口
    // this.$api.getTest()
    // .then(res=>{
    //     console.log(res)
    // })
    //find接口
    this.http()
  },
  methods: {
    http() {
      this.$api.getFind().then(res => {
        console.log(res.data);
        this.top = res.data.top;
        this.list = this.list.concat(res.data.list);
      });
    },
    getChange(info) {
      return require("@/assets/imges/find/" + info + ".png");
    }
  }
};
</script>
<style lang="less" scoped>
#find {
  float: left;
  .find-top {
    height: 3.4rem;
    background: #fff;
    border-radius: 10px;
    margin: 0 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .find-top-hot {
      color:#ccc;
      padding: 10px 0 20px 10px;
      float: left;
      img {
        width: 2.1rem;
        height: 2.6rem;
      }
    }
  }
  .find-list {
    border-radius: 10px;
    margin: 30px 10px 0;
    padding-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .find-list-title {
      height: 1.4rem;
      line-height: 1.4rem;
      font-size: 24px;
    }
    span {
      padding: 10px;
      color: rgb(172, 172, 172);
    }
    img {
      width: 50%;
      float: left;
    }
  }
}
</style>
