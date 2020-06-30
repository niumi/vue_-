<template>
  <div id="navs2">
    <span class="`iconfont"></span>
    <p>{{title.name}}</p>
    <span class="iconfont"></span>
  </div>
</template>
<script>
export default {
  name: "Navs2",
  props: ["title"]
};
</script>
<style lang="less" scoped>
#navs2 {
    width: 100%;
    height: 60px;
    background: #ff406f;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    span{
        flex: 1;
    }
    p{
        flex: 8
    }
}
</style>

