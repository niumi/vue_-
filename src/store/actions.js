import { SETTOKEN } from "./mutiaon-types"
import axios from "axios"

export default {
    setTokenActions({commit},payload){
        commit(SETTOKEN,payload)
    },
    // 点击关注和取消关注
    getAttentionAction({commit},{id}){
        commit('getAttention',id)
    },

}