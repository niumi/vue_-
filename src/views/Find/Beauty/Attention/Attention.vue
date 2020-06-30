<template>
    <div @click.stop="isStore">
        <span v-if="this.$store.state.attention.indexOf(id)!==-1" class="beauty-focus active">已关注</span>
        <span v-else class="beauty-focus">关注</span>
    </div>
</template>
<script>
export default {
    name:'Attention',
    props:["id"],
    mounted(){
        console.log(this.$store.state.attention.indexOf(this.id)!==-1);
    },
    methods:{
        isStore(){
            this.$emit('attention',this.id)
        }
    }
}
</script>

