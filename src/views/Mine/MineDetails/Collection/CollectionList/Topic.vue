<template>
    <div>
        <div class="topic" v-for="(item,index) in topic" :key="index">
            <div>
                <img src="../CollectionList/1.png" alt="" />
                <p>{{item.name}}</p>  
                <p>{{item.dianzan}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Topic',
    data(){
        return{
            topic:[]
        }
    },
    mounted(){
        this.$api
        .getCctopic('/cctopic')
        .then(res=>{
            // console.log(res.data)
            this.topic=res.data  
        })
    }
}
</script>
<style lang="less" scoped>
.topic{
    width:94%;
    height: 150px;
    margin: 5px auto;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    div{
        width:100%;
        height: 100%;
        img{
            width:100%;
            height: 120px;
        }
        p{
            display: inline-block;
        }
    }
}
</style>
