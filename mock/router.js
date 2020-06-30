const express = require("express");
const router = express.Router();
const Mock=require('mockjs');
const url=require('url');
const find=require('./data/find/find');
const fans=require('./data/Fans');
const message=require('./data/Message');
const homeMeiLi=require('./data/home/homeMeiLi');
const sort=require('./data/sort/sort');
const goods=require('./data/goods/goods');
const yindao=require('./data/yindao/yindao');
const homeActives=require('./data/homeActives/homeActives.js');
const homeArticle=require('./data/homeArticle/homeArticle.js');
const homeSign=require('./data/homeSign/homeSign.js');
const ccproduct=require('./data/Ccproduct');
const cctopic=require('./data/Cctopic');
const ccplayer=require('./data/CcPlayer')
const hot=require('./data/hot/hot');
const homeSearch=require('./data/homeSearch/homeSearch.js')
const homeSelectedArticle=require('./data/homeArticle/homeSelectedArticle.js')
const homeCarousel=require('./data/homeCarousel/homeCarousel.js')

//自己的数据
// const search=require('./data/Search');

// 登录
router.post('/login',(req,res)=>{
    let uname=req.body.username;
    let upwd=req.body.password;
    console.log("rec",uname,upwd,typeof upwd);
    const userInfo=[
        {
            name:"w",
            pwd:"123",
            token:"2345RFSW34JHYT4BGRCDWC"
        },
        {
            name:"g",
            pwd:"123",
            token:"wWERFW34JERFW2WWC"
        }
    ];
    for(var i in userInfo){
        if(uname===userInfo[i].name&&upwd===userInfo[i].pwd){
            res.send({
                msg:'登录成功',
                userInfo:userInfo[i]
            })
        }else if(uname!==userInfo[i].name){
            res.send({
                msg:'用户名不存在'
            })
        }else{
            res.send({
                msg:"用户名或密码错误"
            })
        }
    }
})
// 发现页面find
router.get('/find',(req,res)=>{
    console.log("find")
    res.send(find);
})
//粉丝页面
router.get('/fans',(req,res)=>{
    console.log('fans')
    res.send(fans)
})
//消息页面
router.get('/message',(req,res)=>{
    console.log('message')
    res.send(message)
})
//分类页面sort
router.get('/sort',(req,res)=>{
    res.send(sort)
})
//商品腮红页面
router.get('/goods',(req,res)=>{
    res.send(goods)
})
//发现最火话题页面
router.get('/hot',(req,res)=>{
    res.send(hot)
})
//启动页接口
router.get('/yindao',(req,res)=>{
    res.send(yindao)
})
//测试接口
router.get('/',(req,res)=>{
    res.send({
        msg:'ok'
    })
})
// 首页美丽推荐/学美丽页面
router.get('/homeMeiLi',(req,res)=>{
    res.send(homeMeiLi)
})
// 首页活动推荐页面
router.get('/homeActives',(req,res)=>{
    res.send({
        homeActives
    })
})
// 首页精选文章页面
router.get('/homeArticle',(req,res)=>{
    res.send({
        homeArticle
    })
})
// 首页美日一签页面
router.get('/homeSign',(req,res)=>{
    res.send({
        homeSign
    })
})
//收藏产品页面接口
router.get('/ccproduct',(req,res)=>{
    res.send(ccproduct)
})
//收藏话题页面接口
router.get('/cctopic',(req,res)=>{
    res.send(cctopic)
})
//收藏视频播放页面接口
router.get('/ccplayer',(req,res)=>{
    res.send(ccplayer)
})

// 首页搜索框跳转
router.get('/homeSearch',(req,res)=>{
    res.send(homeSearch)
})
// 首页头像跳转精选文章
router.get('/homeSelectedArticle',(req,res)=>{
    res.send(homeSelectedArticle)
})
// 首页轮播图跳转页
router.get('/homeCarousel',(req,res)=>{
    res.send(homeCarousel)
})
module.exports = router;