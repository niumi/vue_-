<template>
    <div>
        <div class="search-nav">
            <i class="iconfont icon">&#xe61c;</i>
            <div class="input">
                <input type="text" placeholder="请输入要搜索的内容" />
                
            </div>
            <span @click="searchHandler">搜索</span>
        </div>
        <h3>大家爱搜</h3>
        <ul  @click="searchHandler">
            <li v-for="(value,key,index) in searchData" :key="index" @click="searchHandler(key)">{{value}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "HomeSearch",
    data(){
        return{
            searchData:{},
        }
    },
    methods:{
        searchHandler(key){
            this.$router.push('/homesearchlist')
            console.log(key);
            
        }
    },
    mounted(){
        this.$api.getHomeSearch()
        .then(res=>{
            console.log(res.data.search);
            this.searchData=res.data.search.hotSearch
        })
        
    }
};
</script>
<style lang="less" scoped>
.search-nav {
    width: 100%;
    height: 1.2rem;
    background-color: #ff406f;
    i {
        font-size: 25px;
        color: #ff406f;
        position: absolute;
        top: 0.4rem;
        left: 0.3rem;
        z-index: 999;
    }
    .input {
        width: 75%;
        height: 0.5rem;
        background-color: #fff;
        position: absolute;
        top: 0.4rem;
        left: 0.2rem;
        border-radius: 10px;
        
        input {
            border: 0;
            line-height: .5rem;
            text-align: left;
            margin-left: .5rem;
            display: inline-block;
            width: 80%;
        }
        
    }
    span {
            height: 0.5rem;
            padding: 0 0.3rem;
            background-color: #fff;
            position: absolute;
            right: .2rem;
            top: .4rem;
           
            border-radius: 10px;
            color: #ff406f;
        }
}
h3{
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    padding: .2rem  .4rem ;
}
ul{
    li{
        float: left;
        border: 1px solid #ff406f;
        border-radius: 10px;
        padding: .1rem .2rem;
        margin-left: .3rem;
    }
}
</style>
