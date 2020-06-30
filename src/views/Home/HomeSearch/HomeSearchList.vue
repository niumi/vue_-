<template>
    <div>
       <div class="search-nav">
            <i class="iconfont icon">&#xe61c;</i>
            <div class="input">
                <input type="text" placeholder="请输入要搜索的内容" />
                
            </div>
            <span @click="searchHandler">搜索</span>
        </div>
        <div class="search-container">
        <ul >
            <li v-for="(value,key,index) in searchTitle" :key="index" @click="change(key)"  >
                <p  :class="{'active':selected===key}" >{{value}}</p></li>
        </ul>
        <div v-for="(element,index) in searchData" :key="index" class="search-content">
            <img :src="element.img" alt="">
            <span>{{element.title}}</span>
            <p>{{element.desc}}</p>
        </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'HomeSearchList',
    data(){
        return{
            searchData:{}, 
            searchTitle:{},
            selected:0
        }
    },
    methods:{
        searchHandler(){
            this.$router.push('/homesearchlist')
        },
        change(key){
            console.log(key);
            this.selected=key
            
            
        }
    },
    mounted(){
        this.$api.getHomeSearch()
        .then(res=>{
            console.log(res.data.search.searchList);
            this.searchData=res.data.search.searchList
        }),
        this.$api.getHomeSearch()
        .then(res=>{
            console.log(res.data.search);
            this.searchTitle=res.data.search.searchTitle
        })
    }
}
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
.search-container{
    width: 86%;
    border: 2px solid #f2f2f2;
    box-shadow: 0 0 10px 5px #f2f2f2;
    margin-left: 7%;
    ul{
        display: flex;
        
        li{
            flex: 1;
            border-right: 1px solid gray;
            margin: .2rem;            
        }
        *:nth-child(3n){
            border-right: 0;
        }
        
    }
    .search-content{
        position: relative;
        text-align: left;
        padding-left: .4rem;
        margin: .4rem 0;
        img{
            width: .8rem;
            height: .8rem;
            border-radius: 10px;
            margin-right: .4rem;
        }
        span{
            position: absolute;
        }
        p{
            position: absolute;
            top: .5rem;
            left: 1.6rem;
        }
        
    }
}
.active{
    color:black;
    font-size: 20px;
}
</style>

