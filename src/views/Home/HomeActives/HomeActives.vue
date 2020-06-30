<template>
    <div class="actives-container">
        <Navs2 :title="title"/>
        <div class="icon iconfont" @click="backHandler">&#xe641;</div>
        <div class="actives-img">
            <img src="../../../assets/homeImg/banner4.png" alt />
            <img src="../../../assets/homeImg/xiangshui.png" alt />
        </div>

        <!-- <ul v-for="(value,key,index) in activesData" :key="index">
            {{value.img1}}
            <li>
                <img :src="value.img1" alt="">
                <img :src="value.img2" alt="">
            
            </li>            
        </ul>-->
    </div>
</template>
<script>
import TopNav from "../../../components/TopNav/TopNav.vue";
export default {
    name: "HomeTabsActives",
    data() {
        return {
            title: {
                name:"活动推荐"
            },
            activesData: {},
            name: {},
            
        };
    },
    components: {
        TopNav
    },
    mounted() {
        // 活动推荐获取数据
        this.$api.getHomeActives().then(res => {
            console.log(res.data.homeActives.actives.name);
            this.name = res.data.homeActives.actives.name;
            this.activesData = res.data.homeActives.actives;
            console.log(res.data.homeActives.actives);
        });
        console.log("mounted");
    },
    methods:{
        // 返回上一级函数
        backHandler(){
            this.$router.back()
        }
    }
};
</script>
<style lang="less" scoped>
// 活动推荐
.actives-container {
    position: relative;
    width: 100%;
    
    .actives-img {
        background-color: #fff;
        border-radius: 10px;
        position: fixed;
        margin:0 2.7%;
        
        img {
            
            width: 100%;
            height: 200px;
            padding: .2rem;
        }
    }
}
.icon{
    position: fixed;
    top: .4rem;
    left: .2rem;
    color: #fff;
    font-size: 24px;
    z-index: 999;
}
</style>

