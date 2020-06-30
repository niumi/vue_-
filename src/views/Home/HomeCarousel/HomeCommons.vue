<template>
    <div>
        <Navs2 :title="title" />
        <i class="iconfont" @click="backHandler">&#xe641;</i>
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
    </div>
</template>
<script>
export default {
    name: "HomeCommons",
    data() {
        return {
            title: {
                name: "评论"
            },
            anothers: {}
        };
    },
    methods: {
        backHandler() {
            this.$router.back();
        },
    },
    mounted() {
        this.$api.getHomeCarousel().then(res => {
            console.log(res.data.carousel.another);
            this.anothers = res.data.carousel.anothers;
        });
    }
};
</script>
<style lang="less" scoped>
i {
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
        color: #fff;
        font-size: 20px;
        z-index: 999;
    }
ul {
    width: 100%;
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
</style>
