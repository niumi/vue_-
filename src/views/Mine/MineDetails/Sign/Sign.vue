<template>
    <div>
        <Goback />
        <div class='sign'>
            <img src="../Sign/日历.png" alt="">
        </div>
        <div class="conent">
           <div class="conent_box">
               <div class="frist"><p>成长值<span>2</span></p></div>
               <div><p>积分<span>25</span></p></div>
           </div>
        </div>
        <div class="jifen">
            <div>
                <p>积分兑豪礼</p>
                <p class="desc">登录签到可获得成长值,累计成长值可兑换积分，</p>
                <p class="desc">积分可用于优惠专区购买限时产品，也可以参加秒杀活动，</p>
                <p class="desc">不定期还可以参与抽奖活动哦！</p>
            </div>
        </div>
    </div> 
</template>
<script>
import Goback from '../../../../components/Goback/Goback.vue'
export default {
    name:'sign',
    components:{
       Goback
    }
}
</script>
<style lang="less" scoped>
.sign{
    width:100%;
    height: 290px;
    border-bottom: 1px solid #eee;
    margin-bottom: 20px;
    img{
        width:310;
        height:230px;
        margin: 30px auto;
    }
}
.conent{
    width:94%;
    height:92px;
    border: 2px solid #eee;
    border-radius: 5px;
    margin:0 auto;
    margin-bottom: 10px;
    .conent_box{
        width:90%;
        height:100%;
        margin:0 auto;
        p{
            font-size: 16px;
            text-align: left;
            margin-top:10px;
            span{
                float: right;
            }
        }
        .frist{
            width:100%;
            height:43%;
            border-bottom: 1px solid #eee;
        }
    }
}
.jifen{
    width:94%;
    height:150px;
    margin: 0 auto;
    border:2px solid #eee;
    border-radius: 5px;
    div{
        width:90%;
        height:100%;
        margin:10px auto;
        p{
            text-align: left;

        }
        .desc{
            margin-top:5px;
            padding:2px 0;
            font-size: 12px;
            color:rgb(177, 173, 173);
        }
    }
}
</style>
