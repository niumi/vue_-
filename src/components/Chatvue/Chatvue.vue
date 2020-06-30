<template>
   <div>
       <Goback />
       <div class="opinion">
       <h1>常见问题</h1>
       <div class="opinion_box">
           <div class="right">
               <span>在吗?</span>
              <img src="../Setup/help1.png" alt="">
           </div>
           <div class="left">
               <img src="../Setup/help2.png" alt="">
               <span>在的啊！</span>
           </div>
       </div>
       <div class="foot">
            <input type="text" placeholder="请输入文字"> 
            <button>发送</button>
        </div>
    </div>
   </div>
</template>
<script>
import Goback from '../Goback/Goback.vue'
export default {
    name:'Chatvue',
    components:{
        Goback
    }
}
</script>
<style lang="less" scoped>
.opinion{
    width:96%;
    margin: 0 auto;
    border:2px solid #eeeeee;
    h1{
        margin-top: 10px;
        text-align: center;
    }
    img,span{
        display: inline-block;
    }
    img{
        width: 50px;
        height:50px;
    }
    .opinion_box{
        width:100%;
        height: 600px;
        .right{
             width:100%;
             height: 100px;
             position: relative;
             img{
                 position: absolute;
                 top:0;
                 right: 0;
             }
        }
        .left{
             width:100%;
             height: 100px;
             position: relative;
             img{
                 position: absolute;
                 top:0;
                 left:0;
             }
            //  span{
            //     float: left;
            //     top:10px;
            //     left:100px;
            //  }
        }
    }
    .foot{
        bottom: 0;
        left:0;
        input{
            width:200px;
            height: 30px;
        }
        button{
            margin: 0 5px;
            width:40px;
            height: 30px;
            background-color: #ffffff;
            border-radius: 2px;
        }
    }
}
</style>
