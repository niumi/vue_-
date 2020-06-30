<template>
    <div>
        <ul>
            <li class="fansList" v-for="(item,index) in fansList" :key="index">
                <div class="fansList_Box">
                    <img src="../Fans/fans/头像-蕊儿.png" alt=""/>
                    <p class="fansList_Box_title">{{item.name}}</p>
                    <br>
                    <p class="fansList_Box_desc">{{item.age}}
                        <span>{{item.sex}}</span> 
                        <span>{{item.skin}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'FansList',
    data(){
        return{
            fansList:[]
        }
    },
    mounted(){
        this.$api
        .getFans('/fans')
        .then(res=>{
            //console.log(res.data)
            this.fansList=res.data
        })
    }
}
</script>
<style lang="less" scoped>
.fansList{
    width:100%;
    height: 70px;
    border:1px solid #eeeeee;
    margin: 5px 0;
    .fansList_Box{
        margin: 1% 2%;
        width:96%;
        height: 98%;
        img{
            width:70px;
            height: 70px;
            float: left;
            padding:5px;
        };
        p{
            display:block;
            font-size: 16px;
            float: left;
            padding-top:10px;
        }
    }
}
</style>
