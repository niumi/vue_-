<template>
  <div class="sort">
    <Navs2 :title="title"/>
    <span class="iconfont icon">&#xe641;</span>
    <div v-for="(ele) in sort" :key="ele.id">
      <p class="sort-title">{{ele.title}}</p>
      <div class="sort-list clear-fix">
        <div class="sort-img" v-for="(element,index) in ele.type" :key="index">
          <!-- <router-link :to="element.name"> -->
          <router-link to="/saihong">
              <img :src="getChange(element.img)" alt />
          </router-link>
        </div>
      </div>
    </div>
    <Router />
  </div>
</template>
<script>
export default {
  name: "sort",
  data() {
    return {
      title:{
        left:"fanhui",
        name:"分类",
        right:""
      },
      sort: []
    };
  },
  mounted() {
    this.$api.getSort().then(res => {
      console.log(res.data.data);
      this.sort = res.data.data;
    });
  },
  methods:{
    getChange(info){
      return require("../../assets/imges/sort/"+info+".png");
    }
  }
};
</script>
<style lang="less" scoped>
.sort-title {
  font-size: 20px;
  height: 40px;
  line-height: 40px;
}
.icon{
  position: absolute;
  top: .4rem;
  left: .4rem;
  font-size: 20px;
  color: #fff;
}
.sort-list {
  border-radius: 10px;
  margin: 10px;
  padding: 0 0 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  .sort-img {
    width: 0.9rem;
    height: 1.6rem;
    float: left;
    margin: 15px 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cotain;
    }
  }
}
</style>
