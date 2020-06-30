<template>
  <div>
    <div v-for="(value,index) in beautyList" :key="index" class="beauty-list clear-fix">
      <img :src="getChange(value.headImg)" alt class="beauty-headImg" />
      <p class="beauty-autor-info">
        <span class="beauty-author">{{value.author}}</span>
        <Attention :id="value.id" @attention="isAttentionHandler" class="beauty-focus"/>
      </p>
      <div class="beauty-left">
        <img :src="getChange(value.leftImg)" alt />
      </div>
      <div class="beauty-right">
        <img :src="getChange(value.rightImg)" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState ,mapActions} from "vuex";
import Storage from "../../../../utils/storage";
import Attention from "../Attention/Attention";
export default {
  name: "Item",
  props: ["beautyList", "arr"],
  components: { Attention },
  computed: {
    ...mapState(["token", "attention"])
  },
  methods: {
    ...mapActions(["getAttentionAction"]),
    getChange(info) {
      return require("@/assets/imges/hot/" + info + ".png");
    },
    //关注事件
    isAttentionHandler(data){
      console.log(data)
      //判断用户是否登录
      const token = this.$store.state.token || localStorage.getItem("token");
      if (token) {
        // 已登录
        // 判断是否关注
        // 如果data为false,则去关注
        if (this.$store.state.attention.indexOf(data)==-1){
          this.getAttentionAction({ id: data });
          Storage.setItem('attention',this.$store.state.attention)
          // console.log(this.$store.state.attention);
        } else{
          this.getAttentionAction({ id: data });
          Storage.setItem('attention',this.$store.state.attention)
        }
      } else {
        // 去登录
        this.$router.push({ path: "/login" });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.beauty-list {
  width: 100%;
  // height: 5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  position: relative;
  .beauty-headImg {
    width: 50px;
    position: absolute;
    top: -10px;
    left: 10px;
  }
  .beauty-autor-info {
    height: 50px;
    line-height: 50px;
    text-align: left;
    .beauty-author {
      padding-left: 75px;
    }
    .beauty-focus {
      padding: 0 10px;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      border: 1px solid #aaa;
      border-radius: 10px;
      float: right;
      margin: 15px 15px 0 0;
    }
  }
  .beauty-left,
  .beauty-right {
    width: 45%;
    float: left;
    margin: 8.5px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
