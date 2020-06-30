<template>
    <div>
        <div class="carousel-icon">
            <Navs2 :title="title"/>
            <i class="iconfont" @click="backHandler">&#xe641;</i>
            <span class="iconfont">&#xe608;</span>
        </div>
        <div class="carousel-container clear-fix">
            <div class="carousel-top-content" v-for="(value,key,index) in another" :key="index">
                <div class="carousel-info">
                    <img :src="value.touxiang" alt class="touxiang" />

                    <p>
                        {{value.name}}
                        <Attention
                            :id="value.id"
                            @attention="isAttentionHandler"
                            class="carousel-focus"
                        />
                    </p>
                    <p>{{value.fans+"粉丝"}}</p>

                    <img :src="value.img1" alt />
                    <div>
                        <span class="iconfont">&#xe610;{{value.fans}}</span>
                        <span class="iconfont">&#xe699;{{value.examine}}</span>
                        <span class="iconfont">&#xe699;{{value.message}}</span>
                    </div>
                </div>
            </div>
            <ul>
                <li v-for="(value,key,index) in anothers" :key="index">
                    <img :src="value.touxiang" alt />
                    <p>
                        {{value.name}}
                        <span>{{value.time+"分钟前"}}</span>
                    </p>
                    <p>{{value.desc}}</p>
                </li>
            </ul>
            <router-link to="/homecommons">
                <div  class="commons">展开全部评论</div>
            </router-link>
            
        </div>
    </div>
</template>
<script>
import TopNav from "../../../components/TopNav/TopNav.vue";
import Attention from "../../Find/Beauty/Attention/Attention.vue";
import Storage from '../../../utils/storage.js'
import { mapState ,mapActions} from "vuex";
export default {
    name: "HomeCarousel",
    data() {
        return {
            title:{
                name:"文章"
            },
            anothers: {},
            another: {}
        };
    },
    components: {
        Attention
    },
    computed: {
    ...mapState(["token", "attention"])
    },
    methods: {
        ...mapActions(["getAttentionAction"]),
        backHandler() {
            this.$router.back();
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
        },
       
    },
    mounted() {
        this.$api.getHomeCarousel().then(res => {
            console.log(res.data.carousel.another);
            this.anothers = res.data.carousel.anothers;
            this.another = res.data.carousel.another;
            console.log(this.another);
        });
    }
};
</script>
<style lang="less" scoped>
.carousel-icon {
    position: relative;
    i {
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
        color: #fff;
        font-size: 20px;
        z-index: 999;
    }
    span {
        position: absolute;
        top: 0.4rem;
        right: 0.4rem;
        color: #fff;
        font-size: 20px;
        z-index: 999;
    }
}

.carousel-container {
    .carousel-info {
        width: 94.6%;
        background-color: #fff;
        position: absolute;
        top: 1.8rem;
        margin-left: 2.7%;
        border-radius: 0.2rem;
        box-shadow: 0 0 10px 5px #f2f2f2;
        .touxiang {
            position: absolute;
            top: -0.4rem;
            left: 0.1rem;

            width: 1.4rem;
            height: 1.4rem;
        }

        img {
            width: 100%;
            padding: 0.2rem;
        }
        p {
            text-align: left;
            padding-left: 1.6rem;
            // span{
            //     text-align: right;
            //     border:1px solid gray;
            //     padding: 5px;
            //     border-radius: 10px;
            //     position: absolute;
            //     right:.4rem;
            // }
            .carousel-focus {
                padding: 0 10px;
                height: 0.6rem;
                line-height: 0.6rem;
                text-align: center;
                border: 1px solid #aaa;
                border-radius: 10px;
                float: right;
                margin: 15px 15px 0 0;
            }
        }
    }
    ul {
        width: 100%;
        padding-top: 5.5rem;
        li {
            width: 100%;
            padding: 0.2rem;
            position: relative;
            height: 1.2rem;
            margin-top: 0.4rem;
            img {
                width: 1rem;
                height: 1rem;
                position: absolute;
                left: 0.4rem;
                top: 0.2rem;
            }
            p {
                text-align: left;
                padding-left: 1.6rem;
                font-size: 14px;
                padding-bottom: 0.3rem;
                span {
                    float: right;
                    padding-right: 0.2rem;
                }
            }
            span {
                padding: 0 0.8rem;
                display: inline-block;
            }
        }
    }
    .commons{
        width: 100%;
        height: .8rem;
        line-height: .8rem;
    }
}
</style>
