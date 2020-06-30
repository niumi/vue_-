<template>
    <div>
        <MessageList />
    </div>
</template>
<script>
import MessageList from './MessageList'
export default {
    name:'message',
    components:{
        MessageList
    }
    // props:['MessageList'],
    // mounted(){
    //     console.log(this.$props)
    // }
}
</script>
<style lang="less" scoped>

</style>
