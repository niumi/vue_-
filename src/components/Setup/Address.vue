<template>
    <div>
        <Goback />
        <div class="address">
            <div>
                <p class="name">阿花妹妹<span>18180593589</span></p>
                <p class="add">邮政编码：123456</p>
                <p class="add">北京市昌平区建材路中腾建华大厦二楼尚学堂</p>
                <p class="set">设为默认地址 ></p>
            </div>
        </div>
    </div>
</template>
<script>
import Goback from '../Goback/Goback.vue'
export default {
    name:'address',
    components:{
        Goback
    }
}
</script>
<style lang="less" scoped>
.address{
    width:100%;
    height:120px;
    border:2px solid #eee;
    margin-top: 10px;
    color: rgb(177, 173, 173);
    div{
        width:94%;
        height:100px;
        margin: 10px auto;
        p{
            text-align: left;
            margin: 2px;
            padding:2px 0;
        }
        .name{
            span{
                margin-left: 50px;
            }
        }
        .add,.set{
            font-size: 12px;
        }
        .set{
            text-align: right;
        }
        
    }
}
</style>
