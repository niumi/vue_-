<template>
    <div>
        <Goback />
        <FansList />
    </div>
</template>
<script>
import Goback from '../../../../components/Goback/Goback.vue'
import FansList from './FansList'
export default {
    name:'fans',
    components:{
        FansList,
        Goback
    }
}
</script>
<style lang="less" scoped>

</style>
