<template>
    <div>
        <div class="ccvideo">
        <div class="top">
            <img src="../Ccvideo/蜜萌.png" alt="">
            <div class="left">Lucy</div>
            <div class="right">2016年11月20日</div>
        </div>
        <div class="next" @click="goCcvideoPlayer">
            <img src="../Ccvideo/do.jpg" alt="" />
        </div>
    </div>
    </div>
</template>
<script>

export default {
    name:'Ccvideo',
    components:{
    //    Goback
    },
    methods:{
        goCcvideoPlayer(){
            this.$router.push('/collection/CcvideoPlayer')
        }
    }
}    
</script>

<style lang="less" scoped>
.ccvideo{
    width: 96%;
    height: 200px;
    margin: 20px 2%;
    border: 2px solid #eeeeee;
    border-radius: 5px;
    .top{
        width:96%;
        height: 30px;
        margin: 2px 2%;
        position: relative;
        img,div{
            display: inline-block;
        }
        img{
            width: 25px;
            height: 25px;
            position: absolute;
            top:2px;
            left: 0;
            float: left;
        }
        .left{
           margin-left: -160px;
           margin-top: 3px;
        }
        .right{
            margin-top: 3px;
            float: right;
        }
    }
    .next{
        width:96%;
        height: 150px;
        margin: 2px 2%;
        img{
            width:100%;
            height: 100%;
            border-radius: 5px;
        }
        // video-player{
        //     width:100%;
        //     height: 100%;
        //     border-radius: 5px;
        // }
    }
}
</style>
