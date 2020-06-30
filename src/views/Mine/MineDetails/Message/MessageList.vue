<template>
    <div class="MessageList">
        <div class="containt">
            <router-link tag="div" to="/message/notice">通知</router-link>|
            <router-link tag="div" to="/message/chat">消息</router-link>
        </div>
        <router-view></router-view>
       
    </div>
     
</template>
<script>
export default {
    name:'MessageList'
   
}
</script>
<style lang="less" scoped>
.MessageList{
    font-size: 18px;
    width:100%;
    height: 100%;
    font-size:18px;
    .containt{
        width:96%;
        height: 50px;
        padding:2%;
        display: flex;
        text-align: center;
        .div{
            flex: 1;
        }
    }
    
}
</style>
