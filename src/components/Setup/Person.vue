<template>
    <div>
        <Goback/>
        <div class='ten'>完善个人资料可以获得10个成长值哦~</div>
        <div class="pic">
            <p>头像</p>
            <img src="../../assets/images/person/头像1.png" alt="">
        </div>
        <div class="nic">
            <p class="text">昵称</p>
            <p class="msg">YuJen</p>
        </div>
        <div class="nic">
            <p class="text">性别</p>
            <div class="sel">
            <el-select v-model="value" placeholder="请选择"  >
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
            </el-select>
            </div>
            
        </div>
        <div class="nic">
            <p class="text">生日</p>
            <div class="cal">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
            </div>
        </div>
        <div class="nic">
            <p class="text">肤质</p>
            <p class="msg">贴心内容推荐多</p>
        </div>
        <div class="nic">
            <p class="text">兴趣</p>
            <textarea name="" id="" cols="20" rows="" class="hobby"></textarea>
        </div>
        <div class="nic">
            <p class="text">loveliness暗号</p>
            <p class="msg">5552loveliness</p>
        </div>
        <div class="nic">
            <p class="text">注册时间</p>
            <p class="msg">2019-07-15</p>
        </div>
    </div>
</template>
<script>
import Goback from "../../components/Goback/Goback.vue"
export default {
    name:'person',
    data() {
      return {
        options: [{
          value: '选项1',
          label: '男'
        }, {
          value: '选项2',
          label: '女'
        }],
        value: '',
        pickerOptions: {
        disabledDate(time) {
        return time.getTime() > Date.now();
        },
        },
         value1: '',
         value2: '',
        }
    },
    components:{
        Goback
    }
}
</script>
<style lang="less" scoped>
.ten{
    color:#ccc;
}
div{
     height: 40px;
    line-height: 40px;
    box-shadow: 3px 3px 3px #f5f5f5;
}
.pic{
     line-height: 40px;
     position: relative;
    p{
    color: #5e6d82;
    text-align: left;
    margin: 0 30px 0;
       
    }
    img{
    height: 38px;
    width:40px;
    position: absolute;
    top:2px;
    right: 30px;
    bottom: 3px;
    }
}
.nic{
    p{
        display: inline;
        
    }
    
}
.text{
    margin-left: 30px;
    position: absolute;
    left: 0px;
}
.msg{
    margin-right: 30px;
    position: absolute;
    right: 0px;
 }
 .sel{
     width: 90px;
     position: absolute;
     right: 14px;
 }
 .cal{
    position: absolute;
    right: 14px;
    div{
        width:140px;
    }
 }
 .hobby{
    height: 25px;
    line-height: 25px;
    position: absolute;
    top: 300px;
    right: 10px;
    border-style: none;
 }
</style>


