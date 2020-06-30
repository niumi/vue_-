<template>
    <div>
        <div class="CcvideoPlayer">
            <div class="top">
                <div><img src="../Ccvideo/蜜萌.png" alt=""></div>
                <div><p>Another</p><p>217 粉丝</p></div>
                <div>关注ta</div>
            </div>
            <div class="tnext"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CcvideoPlayer',
    data(){
        return{ 
        }
    },
    mounted(){
        this.$api
        .getCcplayer('/ccplayer')
        .then(res=>{
            console.log(res.data)
        })
    }
}
</script>
<style lang="less" scoped>
.CcvideoPlayer{
    width:94%;
    height:240px;
    border: 2px solid #eee;
    border-radius: 5px;
    box-shadow: 0 10 100px #eee;
    margin: 0 auto;
    .top{
        width:100%;
        height:6opx;
        display: flex;
        img{
            width:50px;
            height:50px;
        }
        div{
            flex: 1;
        }
    }
}
</style>
