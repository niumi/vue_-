<template>
  <div class="beauty">
    <div class="beauty-banner">
      <img :src="getChange(beauty.banner)" alt />
    </div>
    <Item :beautyList="beautyList"/>
    <LoadMore />
  </div>
</template>
<script>
import Item from "./Item/Item";
import { mapActions } from "vuex";
import Storage from '../../../utils/storage'
export default {
  name: "beauty",
  components: { Item },
  data() {
    return {
      beauty: {},
      beautyList: [],
      arr: []
    };
  },
  mounted() {
    this.$api.getHot().then(res => {
      console.log(res.data.beauty);
      this.beauty = res.data.beauty;
      this.beautyList = res.data.beauty.list;
    });
  },
  methods: {
    ...mapActions(["getAttentionAction"]),
    http() {
      this.$api.getHot().then(res => {
        this.beautyList = this.beautyList.concat(res.data.beauty.list);
      });
    },
    getChange(info) {
      return require("@/assets/imges/hot/" + info + ".png");
    }
  }
};
</script>

<style lang="less" scoped>
.beauty {
  margin: 0 10px;
  .beauty-banner {
    border-radius: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
