<template>
    <div>
        <Navs2 :title="title"/>
        <div class="icon iconfont" @click="backHandler">&#xe641;</div>
        <div class="article">
            <div v-for="(element,index) in article" :key="index">            
            <div class="article-container">
                <div class="article-touxiang">
                    <img :src="element.touxiang" alt="">
                    <span>{{element.name}}</span>
                    <Attention
                            :id="element.id"
                            @attention="isAttentionHandler"
                            class="carousel-focus"
                        />
                </div>
                <img :src="element.img" alt="">
            </div>
               
        </div>
        </div>
        
    </div>
</template>
<script>
import TopNav from '../../../components/TopNav/TopNav.vue'
import Attention from '../../Find/Beauty/Attention/Attention.vue'
import Storage from '../../../utils/storage.js'
import { mapState ,mapActions} from "vuex";
export default {
    name:'HomeArticle',
    data(){
        return{
            article:[],
            title:{
                name:"精选文章"
            }
        }
    },
    components:{
        TopNav,
        Attention
    },computed: {
    ...mapState(["token", "attention"])
  },
    mounted(){
        this.$api.getHomeArticle()
        .then(res=>{
            console.log(res.data.homeArticle);
            
            this.article=res.data.homeArticle.article
            console.log(this.article);
        })
    },
    methods:{
        ...mapActions(["getAttentionAction"]),
        // 返回上一级函数
        backHandler(){
            this.$router.back()
        },
        isAttentionHandler(data) {
            console.log(data);
            //判断用户是否登录
            const token =
                this.$store.state.token || localStorage.getItem("token");
            if (token) {
                // 已登录
                // 判断是否关注
                // 如果data为false,则去关注
                if (this.$store.state.attention.indexOf(data) == -1) {
                    this.getAttentionAction({ id: data });
                    Storage.setItem("attention", this.$store.state.attention);
                    // console.log(this.$store.state.attention);
                } else {
                    this.getAttentionAction({ id: data });
                    Storage.setItem("attention", this.$store.state.attention);
                }
            } else {
                // 去登录
                this.$router.push({ path: "/login" });
            }
        }
    }
}
</script>
<style lang="less" scoped>
.icon{
    position: fixed;
    top: .4rem;
    left: .2rem;
    color: #fff;
    font-size: 24px;
    z-index: 1000;
}
.article{
    width: 100%;
    padding: 0 2.7%;
    position: fixed;
    .article-container{
        background-color: #fff;
        border-radius: 1px solid #eee;
        box-shadow: 0 0 10px 5px #eee;
        .article-touxiang{
            width: .8rem;
            height: .8rem;
            top: -10px;
            position: relative;
            top:-.3rem;
            left: .2rem;
            img{
                width: 100%;
            }
            span{
                position: absolute;
                width: 100px;
                top:.6rem;
                left: .4rem;
            }
            .carousel-focus {
                text-align: center;
                border: 1px solid #aaa;
                border-radius: 10px;
                position: absolute;
                left:5.8rem;
                width: 50px;
            }
        }
        img{
            width: 100%;
            padding: .2rem 2.7%;
        }
    }
}

</style>

