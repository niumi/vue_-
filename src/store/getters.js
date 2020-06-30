export default {
    getToken(state){
        if(state.token){
            return state.token
        }
        return;
    }
}