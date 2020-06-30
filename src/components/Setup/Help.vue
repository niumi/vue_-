<template>
    <div>
        <Goback />
        <div class='help'>
        <ul>
            <li>功能介绍</li>
            <li>常见问题</li>
            <li>成长值记录与原则</li>
            <li>loveliness认证说明</li>
        </ul>
    </div>
    </div>
</template>
<script>
import Goback from '../Goback/Goback.vue'
export default {
    name:'help',
    components:{
        Goback
    }
}
</script>
<style lang="less" scoped>
.help{
    margin-top: 10px;
    width:100%;
    min-height: 100px;
    border: 1px solid #eeeeee;
    color:#808080;
    ul li{
        height:30px;
        font-size:14px;
        border:1px solid #eee;
        
    }
}
</style>
