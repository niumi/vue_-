<template>
  <div>
    <div class="MineDetails">
      <div class="author_suggest">
        <div class="MineDetails-img clear-fix">
          <img src="../../../assets/images/person/头像1.png" alt />
          <p class="top">Another</p>
          <p class="next">Beautiful Lucky</p>
        </div>
        <div class="MineDetails-fans">
          <router-link to="/focus" tag="div">关注</router-link>
          <router-link to="/fans" tag="div">粉丝</router-link>
        </div>
      </div>
    </div>
    <div class="author_info">
      <router-link to="/collection" tag="div">收藏</router-link>
      <router-link to="/message" tag="div">消息</router-link>
      <router-link to="/homesign" tag="div">签到</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "MineDetails"
};
</script>
<style lang="less" scoped>
.MineDetails {
  .author_suggest {
    width: 94%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgba(0,0,0,.2);
    .MineDetails-img {
      img {
        float: left;
        margin:5px 10px 0 10px;
      }
      .top {
        padding: 20px 0 0 0;
      }
      .next {
        padding: 5px;
      }
    }
    .MineDetails-fans {
      padding: 20px 0;
      display: flex;
      div {
        flex: 1;
        cursor: pointer;
      }
    }
  }
}
.author_info {
  width: 96%;
  background-color: #fff;
  margin: 20px auto;
  border: 2px solid #eee;
  border-radius: 5px;
  text-align: center;
  display: flex;
  box-shadow: 0 0 5px rgba(0,0,0,.2);
  div {
    flex: 1;
    font-size: 18px;
    padding: 10px;
    color: darkgray;
    cursor: pointer;
  }
}
</style>
