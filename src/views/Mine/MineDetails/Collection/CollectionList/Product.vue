<template>
    <div>
        <div class="product" v-for="(item,index) in product" :key="index">
            <div class='left' >
                <img :src='item.img' alt=""/>
                <p>{{item.title}}</p>
                <p>{{item.price}}
                    <span>{{item.comments}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Product',
    data(){
       return{
            product:[]
       }
    },
    mounted(){
        this.$api
        .getCcproduct('/ccproduct')
        .then(res=>{
            //console.log(res.data)
            this.product=res.data
        })
    }
}
</script>
<style lang="less" scoped>
.product{
    width:94%;
    height: 150px;
    margin: 5px auto;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    div{
        width:45%;
        height: 100%;
        img{
            width:100%;
            height: 100px;
        }
    }
}
// .product:nth-child(2n)>div{
//     margin-left: 5%;
// }
</style>
