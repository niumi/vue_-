<template>
    <div class="Goback" @click="goback">
        <img src="../Goback/1.png" alt=""/>
        <p>返回上一级</p>
    </div>
</template>
<script>
export default {
    name:'Goback',
    methods:{
        goback(){
            window.history.back();
        }
    }
}
</script>
<style lang="less" scoped>
.Goback{
    width:100%;
    height:50px;
    background-color: #ff406f;
    position: fixed;
    top:0;
    left:0;
    position: relative;
    img{
        position: absolute;
        top:10px;
        left:10px;
        cursor: pointer;
    }
    p{
        text-align: center;
        color:#ffff;
        font-size:16px;
        padding: 10px;
    }
    
}
</style>
