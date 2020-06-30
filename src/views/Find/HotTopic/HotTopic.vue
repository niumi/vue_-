<template>
  <div class="hotTopic">
    <div class="hotTopic-banner">
      <img :src="getChange(hotTopic.banner)" alt />
    </div>
    <p class="hotTopic-title">{{hotTopic.title}}</p>
    <HotList :hotList="list" />
    <LoadMore />
  </div>
</template>
<script>
export default {
  name: "hotTopic",
  data() {
    return {
      hotTopic: {},
      list: []
    };
  },
  mounted() {
    this.$api.getHot().then(res => {
      console.log(res.data.hotTopic);
      this.hotTopic = res.data.hotTopic;
      this.list = res.data.hotTopic.list;
      console.log(this.list)
    });
  },
  methods: {
    http() {
      this.$api.getHot().then(res => {
        this.list = this.list.concat(res.data.hotTopic.list);
      });
    },
    getChange(info) {
      return require("@/assets/imges/hot/" + info + ".png");
    }
  }
};
</script>
<style lang="less" scoped>
.hotTopic {
  margin: 0 10px;
  .hotTopic-banner {
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
  .hotTopic-title {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
  }
  .hottopic-content {
    .hotTopic-list {
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
      .hotTopic-img {
        width: 100%;
        height: 3rem;
        object-fit: cover;
      }
      .hotTopic-desc {
        font-size: 12px;
        height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
      }
      .hotTopic-author-info {
        color: #666;
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
        .hotTopic-like {
          padding-right: 10px;
          float: right;
        }
      }
    }
  }
}
</style>
