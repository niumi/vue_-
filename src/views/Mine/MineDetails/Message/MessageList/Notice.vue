<template>
    <div>
         <div class="list" v-for="(item,index) in MessageList" :key="index">
            <img src="../MessageList/2.png" alt="">
            <div>
                <p>{{item.title}}<span>{{item.time}}</span></p>
                <p>{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Notice',
    data(){
        return{
            MessageList:''
        }
    },
    mounted(){
       this.$api
       .getMessage('/message')
       .then(res=>{
           //console.log(res.data)
           this.MessageList=res.data
       })
    }
}
</script>
<style lang="less" scoped>
.list{
        width:94%;
        padding:0 3%;
        height: 70px;
        border:1px solid #eeeeee ;
        margin: 5px 0;
        img,div {
            display: block;
            float: left;
        }
        img{
            width:60px;
            height:65px;
            padding:5px;
        }
        div p{
            padding:5px;
        }
    }
</style>

