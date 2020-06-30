<template>
  <div>
    <div class="hotlist-content clear-fix">
      <div v-for="(ele,index) in hotList" :key="index" class="hotlist-list">
        <img :src="getChange(ele.img)" alt class="hotlist-img" />
        <p class="hotlist-desc">{{ele.desc}}</p>
        <p class="hotlist-author-info clear-fix">
          <img :src="getChange(ele.headImg)" alt />
          <span class="hotlist-author">{{ele.author}}</span>
          <span class="hotlist-like">{{ele.like}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HotList",
  props: {
    hotList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    getChange(info) {
      return require("@/assets/imges/hot/" + info + ".png");
    }
  }
};
</script>
<style lang="less" scoped>
.hotlist-content {
  .hotlist-list {
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
    .hotlist-img {
      width: 100%;
      height: 3rem;
      object-fit: cover;
    }
    .hotlist-desc {
      font-size: 12px;
      height: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
    }
    .hotlist-author-info {
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
      .hotlist-like {
        padding-right: 10px;
        float: right;
      }
    }
  }
}
</style>
