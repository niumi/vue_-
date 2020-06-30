<template>
  <div class="hotGoods">
    <div class="hotGoods-banner">
      <img :src="getChange(hotGoods.banner)" alt />
    </div>
    <HotList :hotList="goods" />
    <div class="hotGoods-list">
      <p class="hotGoods-list-title">LULI直选</P>
      <div v-for="(ele,index) in hotGoods.list" :key="index"  class="hotGoods-list-info clear-fix">
        <div class="hotGoods-list-img">
            <img :src="getChange(ele.img)" alt />
        </div>
        <div class="hotGoods-list-desc">
            <P class="hotGoods-list-desc-title">{{ele.title}}</p>
            <P class="hotGoods-list-desc-origin">{{ele.origin}}</p>
            <P class="hotGoods-list-desc-price">￥{{ele.price}}</p>
        </div>
      </div>
    </div>
    <LoadMore />
  </div>
</template>
<script>
export default {
  name: "hotGoods",
  data() {
    return {
      hotGoods: {},
      goods:[]
    };
  },
  mounted() {
    this.$api.getHot().then(res => {
      console.log(res.data.hotGoods);
      this.hotGoods = res.data.hotGoods;
      this.goods=res.data.hotGoods.goods;
    });
  },
    methods: {
      http() {
        this.$api.getHot().then(res => {
          this.hotGoods.list = this.hotGoods.list.concat( res.data.hotGoods.list);
        });
      },
      getChange(info) {
        return require("@/assets/imges/hot/" + info + ".png");
      }
    }
};
</script>
<style lang="less" scoped>
.hotGoods {
  margin: 0 10px;
  .hotGoods-banner {
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
  .hotGoods-goods {
    .hotGoods-list {
      width: 48.5%;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin: 10px 0;
      float: left;
      &:nth-child(2n) {
        margin-left: 10px;
      }
      p {
        padding: 0 5px;
      }
      .hotGoods-img {
        width: 100%;
        height: 3rem;
        object-fit: cover;
      }
      .hotGoods-desc {
        font-size: 12px;
        height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .hotGoods-author-info {
        height: 40px;
        line-height: 40px;
        text-align: left;
        img {
          width: 20px;
          float: left;
          padding: 10px 0;
        }
        span {
          padding-left: 5px;
        }
        .hotGoods-like {
          padding-left: 1rem;
        }
      }
    }
  }
  .hotGoods-list{
      .hotGoods-list-title{
          height:40px;
          line-height:40px;
          font-size:20px;
      }
      .hotGoods-list-info{
        width:100%;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        margin: 10px 0;
        div{
            float:left;
        }
        .hotGoods-list-img{
            width:40%;
            padding:15px;
            img{
                width:100%;
                object-fit:fill;
            }
        }
        .hotGoods-list-desc{
            padding:15px;
            font-size:20px;
            text-align:left;
            .hotGoods-list-desc-title{
                height:50px;
                line-height:50px;
            }
            .hotGoods-list-desc-origin{
                padding-top:20px;
            }
            .hotGoods-list-desc-price{
                padding-top:20px;
                font-size:20px;
            }
        }
      }
      
  }
}
</style>
