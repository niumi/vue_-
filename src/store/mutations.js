import { SETTOKEN, ATTENTION } from "./mutiaon-types"
export default {
    // 修改状态的函数
    [SETTOKEN](state, payload) {
        state.token = payload
    },
    //关注和取消状态
    getAttention(state,  id ) {
        if(state.attention.indexOf(id)===-1){
            state.attention.push(id)
        }else{
            let index=state.attention.indexOf(id);
            state.attention.splice(index,1);
        }
    },
}