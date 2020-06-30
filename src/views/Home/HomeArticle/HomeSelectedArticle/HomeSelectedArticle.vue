<template>
    <div>
        <Navs2 :title="title"/>
        <div class="icon">
            <i @click="backHandler" class="iconfont">&#xe641;</i>
            <span class="iconfont">&#xe608;</span>        
        </div>
        <ul>
            <li v-for="(value,key,index) in selectedData" :key="index">
                <div class="touxiang">
                    <img :src="value.touxiang" alt="">
                    <span>{{value.name}}</span>
                    <i @click="attentionHandler">{{value.attention}}</i>
                </div>
                <img :src="value.img" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import TopNav from '../../../../components/TopNav/TopNav.vue'
export default {
    name:'HomeSelectedArticle',
    data(){
        return{
            selectedData:[],
            title:{
                name:"精选文章"
            },
            
        }
    },
    mounted(){
        // 获取数据
        this.$api.getHomeSelectedArticle()
        .then(res=>{
            console.log(res.data.article);
            this.selectedData=res.data.article
        })
    },
    components:{
        TopNav
    },
    methods:{
        // 回退
        backHandler(){
            this.$router.back()
        },
        // 关注
        attentionHandler(){

        }
    }
}
</script>
<style lang="less" scoped>
.icon{
    i{
        position: absolute;
        top: .4rem;
        z-index: 999;
        left: .4rem;
        color: #fff;
        font-size: 20px;
    }
    span{
        position: absolute;
        top: .6rem;
        z-index: 999;
        right: .4rem;
        color: #fff;
        font-size: 20px;
    }
}
ul{
    width: 94.6%;
    position: absolute;
    background-color: #fff;
    border-radius: .2rem;
    margin-left: 2.7%;
    li{
        width: 100%;
        padding: .4rem 2.7%;
        box-shadow: 0 0 10px 5px #eee;
        .touxiang{
            
            img{
                width: .8rem;
                height: .8rem;
                position: relative;
                top: -.6rem;
                left: -2.8rem;
            }
            span{
                float: left;
                position: relative;
                top: -.1rem;
                left: 1.2rem;
            }
            i{
                border:1px solid #eee;
                position: relative;
                padding: .1rem;
                border-radius: 10px;
                top: -.6rem;
                right: -1.8rem;
            }
        }
        img{
            width: 100%;
        }
    }
}
</style>

