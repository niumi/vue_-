<template>
    <div class="top">
        <div v-if="currentIndex==0">
            <div @click="carouselHandler">
                <Carousel :banners="banners" style="padding:0 15px" />
            </div>
            <ul>
                        <!-- {{value}} -->
                        <li
                            v-for="(item,index) in titleList"
                            :key="index"
                            @click="getTitleList(index)"
                        >{{item}}</li>
                    </ul>
            <div>

                
                <div v-for="(value,key,index) in meili" :key="index" class="meili-container">
                    
                    <h3>
                        <img :src="value.xinImg" alt />
                        {{value.title}}
                        <img :src="value.xinImg" alt />
                    </h3>
                    <div class="meili-content">
                        <div class="meili-head-portrait" @click="headPortraitHanlder">
                            <img :src="value.headPortrait" alt />
                        </div>
                        <p>{{value.spokesman}}</p>
                        <Attention
                            :id="value.id"
                            @attention="isAttentionHandler"
                            class="hometabs-focus"
                        />
                        <div class="meili-content-img">
                            <img :src="value.perfume" alt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="currentIndex==1" class="xue-diary">
            <div class="xue-diary-container">
                <div class="xue-diary-title">
                    <span @click="getLeft" :class="{'active':left}">美丽视频</span>
                    <span @click="getRight" :class="{'active':right}">女神日记</span>
                </div>
                <div v-if="left" >
                        <div v-for="(element,index) in xuebianmei" :key="index" class="home-riji">
                            <img :src="element.img" alt />
                            <p>{{element.desc}}</p>
                            <span class="iconfont">&#xe61c;</span>
                        </div>
                </div>
                <div v-if="right">
                    
                        <div v-for="(element,index) in xuebianmei" :key="index" class="home-riji">
                            <img :src="element.img" alt />
                            <p>{{element.desc}}</p>
                        </div>
                    
                </div>
            </div>
        </div>
        <!-- <LoadMore /> -->
    </div>
</template>
<script>
import axios from "axios";
import HomeList from "./HomeList";
import Attention from "../../Find/Beauty/Attention/Attention.vue";
import Storage from "../../../utils/storage.js";
import { mapState, mapActions } from "vuex";
export default {
    name: "HomeTabs",
    data() {
        return {
            tabsData: [],
            show: true,
            left: true,
            right: false,
            xuebianmei: [],
            meili: [],
            banners: [
                { src: require("../../../assets/homeImg/banner1.png") },
                { src: require("../../../assets/homeImg/banner2.png") },
                { src: require("../../../assets/homeImg/banner1.png") },
                { src: require("../../../assets/homeImg/banner2.png") },
                { src: require("../../../assets/homeImg/banner1.png") }
            ],
            titleList:[]
        };
    },
    props: ["currentIndex"],
    mounted() {
        // console.log(this.tabsData);
    },
    methods: {
        ...mapActions(["getAttentionAction"]),
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
        getLeft(t) {
            this.left = true;
            this.right = false;
            //   console.log(this.left);
            //   console.log(this.right);
        },
        getRight(t) {
            this.left = false;
            this.right = true;
            //   console.log(this.left);
            //   console.log(this.right);
            //   console.log(this);
        },
        // 三个标题跳转
        getTitleList(index) {
            //   console.log(index);
            if (index == 0) {
                this.$router.push({
                    path: "/homearticle"
                });
            }
            if (index == 1) {
                this.$router.push({
                    path: "/homeactives"
                });
            }
            if (index == 2) {
                this.$router.push({
                    path: "/homesign"
                });
            }
        },

        // 头像跳转
        headPortraitHanlder() {
            this.$router.push({
                path: "/homeselectedarticle"
            });
        },
        // 轮播图跳转
        carouselHandler() {
            this.$router.push({
                path: "/homecarousel"
            });
        },
        http() {
            this.$api.getHomeMeiLi().then(res => {
                // console.log(res.data);
                this.meili = this.meili.concat(res.data.meili.meili);
                this.titleList=this.titleList.concat(res.data.meili.titleList);
                this.xuebianmei = this.xuebianmei.concat(
                    res.data.xuebianmei.xue.riji
                );
            });
        }
    },
    components: {
        HomeList,
        Attention
    },
    mounted() {
        // 美丽推荐和学美丽网络请求
        this.http();
    }
};
</script>
<style lang="less" scoped>
// 美丽推荐样式
.top .meili-container {
    width: 100%;
    // margin-top: 3.8rem;
    flex: 1;
}
@m-left: 2.7%;
.top ul {
    width: 94.6%;
    height: 1.1rem;
    display: flex;
    border: 1px solid #eee;
    margin-left: @m-left;
    border-radius: 0.2rem;
    margin-top: 0.3rem;
    box-shadow: 0px 0px 10px 5px #d3c7c7;
    text-align: center;
    li {
        float: left;
        color: black;
        flex: 1;
        line-height: 1.1rem;
        font-size: 16px;
    }
}
h3 {
    display: block;
    margin: 0.4rem 0.2rem 0.3rem;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    img {
        width: 10px;
        height: 10px;
    }
}
.meili-content {
    width: 94.6%;
    height: 5rem;
    border: 2px solid #eee;
    box-shadow: 0px 0px 10px 5px #d3c7c7;
    margin-left: @m-left;
    position: relative;
    .meili-head-portrait {
        img {
            position: absolute;
            top: -10px;
            left: 10px;
            width: 0.8rem;
            height: 0.8rem;
        }
    }
    .hometabs-focus {
        padding: 0 10px;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        border: 1px solid #aaa;
        border-radius: 10px;
        float: right;
    }

    p {
        float: left;
        margin-left: 1.2rem;
        margin-top: 0.2rem;
        font-size: 14px;
    }
    .meili-right {
        float: right;
        border: 1px solid gray;
        padding: 3px 0.2rem;
        border-radius: 20px;
        position: absolute;
        right: 0.2rem;
        top: -0.1rem;
    }
    .meili-content-img {
        img {
            width: 94.6%;
            padding-top: 0.4rem;
        }
    }
}
// 学美丽  女神日记
.xue-diary {
    .xue-diary-container {
        width: 94.6%;
        margin-left: 2.7%;
        background-color: #fff;
        border-radius: 0.2rem;
        .xue-diary-title {
            display: flex;
            span {
                flex: 1;
                font-size: 16px;
                padding: 0.5rem 0 0.2rem;
            }
        }
        ul {
            li {
                img {
                    width: 100%;
                }
            }
        }
        
    }
}

     .home-riji {
    position: relative;
    img {
        width: 100%;
    }
    p {
        text-align: left;
        margin-left: 0.2rem;
    }
    span {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 50px;
        color: #fff;
        margin: -25px 0 0 -25px;
    }
}

   


</style>

