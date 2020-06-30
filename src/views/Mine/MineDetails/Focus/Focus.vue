<template>
    <div>
        <Goback />
        <FansList />
    </div>
</template>
<script>
import Goback from '../../../../components/Goback/Goback.vue'
import FansList from '../../../Mine/MineDetails/Fans/FansList'
export default {
    name:'focus',
    components:{
        FansList,
        Goback
    }
}
</script>