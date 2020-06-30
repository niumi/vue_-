<template>
    <div>
        <Navs2 :title="title"/>
        <!-- <div class="sign-nav">
            <p>{{title}}</p>
        </div> -->

        <div class="icon iconfont" @click="backHandler">&#xe641;</div>
        <div class="time">
            <Calendar v-on:choseDay="clickDay" v-on:changeMonth="changeDate" :markDate="arr" ></Calendar>
        </div>
        <div v-for="(value,key,index) in signData" :key="index" class="sign-bottom">
            <div class="sign-img" @click="addHandler">
                <img :src="value.addImg" alt />
            </div>
            <p>
                {{value.growthValue}}
                <span>{{growthValue}}</span>
            </p>
            <p>
                {{value.integral}}
                <span>{{integral}}</span>
            </p>
            <h3><span></span>{{value.title}} <span></span></h3>
            <p class="desc">
                {{value.desc}}
            </p>
        </div>
    </div>
</template>
<script>
// 日历
import Calendar from "vue-calendar-component";
export default {
    name: "HomeSign",
    data() {
        return {
            // v-on:markDate="arr" 获取arr数据
            title:{
                name:"美日一签",
            },
            arr: [],
            signData: {},
            growthValue: 0,
            integral: 0,
        };
    },
    components: {
        Calendar
    },
    methods: {
        clickDay(data) {
            console.log(data); //选中某天
            this.arr.push(data)
            console.log(this.arr);            
            localStorage.setItem("sign",this.arr) 
            this.growthValue += 1;
            this.integral += 10;           
            localStorage.setItem("integral",this.integral)
            localStorage.setItem("growthValue",this.growthValue)
        },
        changeDate(data) {
            console.log(data); //左右点击切换月份
        },
        clickToday(data) {
            console.log(data); //跳到了本月
        },
        backHandler() {
            this.$router.back();
            console.log(111);
        },
        addHandler() {
            
        }
    },
    mounted() {
        this.$api.getHomeSign().then(res => {
            console.log(res.data.homeSign.sign);
            this.signData = res.data.homeSign;
            console.log(this.signData);
        });        
        if(localStorage.getItem("sign")){
            this.arr.push(localStorage.getItem("sign"))
        }
        
        this.growthValue=Number(localStorage.getItem("growthValue"))
        this.integral=Number(localStorage.getItem("integral"))
    },
    
};
</script>
<style>
.wh_content_all{
    background: #fff !important;
}
.wh_content_item, .wh_top_changge li{
    color: black !important;
}
.wh_content_item .wh_isToday{
    background: #FF406F !important;
}
.wh_content_item>.wh_isMark{
    background: #FF406F !important;
}

.wh_top_changge li .wh_jiantou2{
    
    border-top: 2px solid black; 
    border-right:2px solid black;
}
.wh_top_changge li .wh_jiantou1{
    border-top: 2px solid black; 
    border-left:2px solid black;
}
</style>
<style lang="less" scoped>
.time {
    position: relative;
    background-color: #fff;
}
.icon {
    position: fixed;
    font-size: 24px;
    top: 0.4rem;
    left: 0.2rem;
    z-index: 1000;
    color: #fff;
}
.sign-nav {
    width: 100%;
    height: 1.2rem;
    background-color: #fff;
    text-align: center;
    p {
        font-size: 16px;
        color: gray;
        padding-top: 0.5rem;
        border-bottom: 1px solid red;
        padding-bottom: 0.2rem;
    }
}
.sign-bottom {
    .sign-img {
        width: 100%;
        height: 1.2rem;
        img {
            float: right;
            width: 1rem;
            margin: 0.2rem 0.6rem 0 0;
        }
    }
    p {
        text-align: left;
        width: 100%;
        padding-left: 0.6rem;
        font-size: 14px;
        padding-top: 0.2rem;
    }
    h3 {
        font-size: 16px;
        text-align: center;
        span{
            width: 30px;
            height: 2px;
            background-color: black;
        }
    }
    .desc{
        padding-right: .6rem;
        font-size: 13px;
        margin-top: .2rem;
    }
}
</style>

