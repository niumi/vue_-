<template>
    <div>
        <Goback />
        <div class="collection">
            <router-link tag="div" to="/collection/topic">话题</router-link>
            <router-link tag="div" to="/collection/product">产品</router-link>
            <router-link tag="div" to="/collection/video">视频</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Goback from '../.../../../../../components/Goback/Goback.vue'
export default {
    name:'collection',
    components:{
        Goback
    }
}
</script>
<style lang="less" scoped>
.collection{
    display: flex;
    div{
        flex: 1;
        text-align: center;
        margin-top: 7px;
        font-size: 16px;
        cursor: pointer;
    }
}
</style>
