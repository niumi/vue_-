<template>
  <div class="saihong">
    <Navs :title="title"/>
    <div v-for="(ele,index) in saihong" :key="index" class="saihong-list clear-fix">
      <div v-for="(ele) in ele" :key="ele.id" class="saihong-detail">
        <img :src="getChange(ele.img)" alt class="saihong-img" />
        <p class="saihong-title">{{ele.title}}</p>
        <span>参考价：￥{{ele.price}}</span>
        <span class="saihong-count">{{ele.count}}</span>
      </div>
    </div>
    <LoadMore />
  </div>
</template>
<script>
export default {
  name: "saiHong",
  data() {
    return {
      title:["腮红"],
      saihong: []
    };
  },
  mounted() {
    this.http();
  },
  methods: {
    http() {
      this.$api.getGoods().then(res => {
        console.log(res.data.saihong);
        this.saihong = this.saihong.concat(res.data.saihong);
      });
    },
    getChange(info) {
      return require("@/assets/imges/goods/" + info + ".png");
    }
  }
};
</script>
<style lang="less" scoped>
.saihong {
  .saihong-list {
    margin: 15px;
    height: 5rem;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    .saihong-detail {
      width: 50%;
      float: left;
      text-align: left;
      &:nth-child(1) {
        padding-right: 10px;
      }
      img {
        width: 100%;
        height: 4rem;
        object-fit: cover;
      }
      .saihong-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 20px;
        padding: 0 5px;
      }
      span {
        padding: 0 5px;
      }
      .saihong-count {
        float: right;
      }
    }
  }
}
</style>
