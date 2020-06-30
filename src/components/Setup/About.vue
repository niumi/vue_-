<template>
    <div>
        <Goback />
        <p class="title">关于loveliness</p>
        <div class="about_box">
            <img src="../../assets/images/message/通知头像.png" alt="">
            <p class="desc">当前版本：V1.0.0版</p>
        </div>
        <div class="about_foot">
            <p>分享给朋友</p>
        </div>
        <div class="about_foot1">
            <p>免责声明</p>
        </div>
    </div>
</template>
<script>
import Goback from '../Goback/Goback.vue'
export default {
    name:'about',
    components:{
        Goback
    }
}
</script>
<style lang="less" scoped>
p{
    font-size:14px;
    color:rgb(177, 173, 173);
    text-align: center;
    padding: 10px;
}
.title{
    margin-top: 10px;
}
.about_box{
    width:100%;
    height: 200px;
    border:2px solid #eee;
    img{
        margin-top: 30px;
    }
}
.about_foot,.about_foot1{
    width:100%;
    height: 35px;
    border:1px solid #eee;
    p{
        text-align: left;
    }
}
.about_foot{
    margin-top: 20px;
}
</style>
