<template>
  <div class="mine">
    <Navs :title="title"/>
    <MineDetails />
  </div>
</template>
<script>
import MineDetails from '../Mine/MineDetails/MineDetails'
export default {
  name:'mine',
  data(){
    return{
      title:["我的"]
    }
  },
  components:{
    MineDetails
  },
  methods:{
    goSetDetails(){
      this.$router.push({
        path:'/setDetails'
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
