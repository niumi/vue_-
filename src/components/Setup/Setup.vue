<template>
    <div>
        <Goback />
        <div class="setup">
            <router-link to='/person' tag="p">个人资料</router-link>
            <router-link to='/binding' tag="p">绑定</router-link>
            <router-link to='/address' tag="p">收货地址</router-link>
            <p>清除缓存</p>
            <p>小屏模式(省高达70%流量)</p>
            <router-link to='/about' tag="p">关于loveliness</router-link>
            <router-link to='/help' tag="p">帮助</router-link>
            <router-link to='/opinion' tag="P">意见反馈</router-link>
            <button @click="LogoutHandler">退出登录</button>
        </div>
    </div>
</template>
<script>
import Goback from '../Goback/Goback.vue'
import storage from '../../utils/storage'
export default {
    name:'setup',
    methods:{
        LogoutHandler(){
            this.$router.push('/home');
            //清空登录信息
            this.$store.state.token=null;
            storage.removeItem('token')
            storage.removeItem('attention')
        }
    },
    components:{
        Goback
    }
}
</script>
<style lang="less" scoped>
.setup{
    width: 94%;
    height: 600px;
    border:2px solid #eee;
    border-radius: 5px;
    margin: 0 auto;
    color:#333333;
    cursor: pointer;
    p{
        font-size:14px;
        padding: 5px;
        margin: 10px;
        text-align: left;
    }
    button{
        width:60%;
        height: 50px;
        font-size: 18px;
        background-color: #ffffff;
        border:2px solid #eee;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,.2);
        margin-top: 20px;
    }
}
</style>

