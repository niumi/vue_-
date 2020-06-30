import axios from '../utils/http';
import base from './base'

const api={
    //测试接口
    getTest(){
        return axios.get(base.baseUrl+base.msg)
    },
    // 登录接口
    getLogin(params){
        return axios.post(base.baseUrl+base.login,params)
    },
    //发现页接口
    getFind(){
        return axios.get(base.baseUrl+base.find)
    },
    //粉丝页面借口
    getFans(){
        return axios.get(base.baseUrl+base.fans)
    },
    //消息页面接口
    getMessage(){
        return axios.get(base.baseUrl+base.message)
    },
    // 首页美丽推荐/学美丽接口
    getHomeMeiLi(){
        return axios.get(base.baseUrl+base.homeMeiLi)
    },
    //分类页接口
    getSort(){
        return axios.get(base.baseUrl+base.sort)
    },
    //商品页面
    getGoods(){
        return axios.get(base.baseUrl+base.goods);
    },
    //最火话题和最美达人
    getHot(){
        return axios.get(base.baseUrl+base.hot)
    },
    // 首页活动推荐接口
    getHomeActives(){
        return axios.get(base.baseUrl+base.homeActives)
    },
    // 首页精选文章接口
    getHomeArticle(){
        return axios.get(base.baseUrl+base.homeArticle)
    },
    // 首页美日一签接口
    getHomeSign(){
        return axios.get(base.baseUrl+base.homeSign)
    },
    //启动页接口
    getYinDao(){
        return axios.get(base.baseUrl+base.yindao)
    },
    getStart(){
        return axios.get(base.baseUrl+base.start)
    },
    //收藏产品页接口
    getCcproduct(){
        return axios.get(base.baseUrl+base.ccproduct)
    },
    //收藏页面话题接口
    getCctopic(){
        return axios.get(base.baseUrl+base.cctopic)
    },
    //收藏页面视频播放接口
    getCcplayer(){
        return axios.get(base.baseUrl+base.ccplayer)
    },
    // 首页搜索框跳转接口
    getHomeSearch(){
        return axios.get(base.baseUrl+base.homeSearch)
    },
    // 首页头像跳转精选文章
    getHomeSelectedArticle(){
        return axios.get(base.baseUrl+base.homeSelectedArticle)
    },
    // 首页轮播图跳转页接口
    getHomeCarousel(){
        return axios.get(base.baseUrl+base.homeCarousel)
    },
    


}
export default api;