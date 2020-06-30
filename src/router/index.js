import Vue from 'vue'
import Router from 'vue-router'
import Start from '../views/Start/Start.vue'
import Storage from '../utils/storage'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes: [
        //开始页
        {
            path: '/',
            name: 'start',
            component: Start
        },
        //引导页
        {
            path: '/yindao',
            name: 'yindao',
            component: () => import('../views/YinDao/YinDao.vue')
        },
        //home页
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home/Home.vue')
        },
        //发现页
        {
            path: '/find',
            name: 'find',
            component: () => import('../views/Find/Find.vue')
        },
        //分类页
        {
            path: '/sort',
            name: 'sort',
            component: () => import('../views/Sort/Sort.vue')
        },
        //我的
        {
            path: '/mine',
            name: 'mine',
            component: () => import('../views/Mine/Mine.vue'),
            meta: {
                isLogin: true
            }
        },
        //登录
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login/Login.vue'),
        },
        //注册
        {
            path: '/registered',
            name: 'registered',
            component: () => import('../views/Registered/Registered.vue')
        },
        {
            path: '/collection',
            name: 'collection',
            redirect: '/collection/topic',
            component: () => import('../views/Mine/MineDetails/Collection/Collection.vue'),
            //收藏页面
            children: [
                //视频
                {   
                    path: 'video',
                    name: 'Video',
                    component: () => import('../views/Mine/MineDetails/Collection/CollectionList/Video.vue')
                },
                //产品
                {   
                    path: 'product',
                    name: 'Product',
                    component: () => import('../views/Mine/MineDetails/Collection/CollectionList/Product.vue')
                },
                //话题
                {
                    path: 'topic',
                    name: 'Topic',
                    component: () => import('../views/Mine/MineDetails/Collection/CollectionList/Topic.vue')
                }
            ]
        },
        //粉丝
        {
            path: '/fans',
            name: 'fans',
            component: () => import('../views/Mine/MineDetails/Fans/Fans.vue')
        },
        //关注
        {
            path: '/focus',
            name: 'focus',
            component: () => import('../views/Mine/MineDetails/Focus/Focus.vue')
        },
        //消息页面
        {
            path: '/message',
            name: 'message',
            redirect: '/message/notice',
            component: () => import('../views/Mine/MineDetails/Message/Message.vue'),
            children: [
                 //消息
                {
                    path: 'notice',
                    name: 'Notice',
                    component: () => import('../views/Mine/MineDetails/Message/MessageList/Notice.vue')
                },
                //通知
                {
                    path: 'chat',
                    name: 'Chat',
                    component: () => import('../views/Mine/MineDetails/Message/MessageList/Chat.vue')
                }
            ]
        },
        //签到
        {
            path: '/sign',
            name: 'sign',
            component: () => import('../views/Mine/MineDetails/Sign/Sign.vue')
        },
        {
            path: '/setDetails',
            name: 'setDetails',
            component: () => import('../views/Mine/MineDetails/SetDetails/SetDetails.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../components/Setup/About.vue')
        },
        {
            path: '/person',
            name: 'person',
            component: () => import('../components/Setup/Person.vue')
        },
        {
            path: '/address',
            name: 'address',
            component: () => import('../components/Setup/Address.vue')
        },
        {
            path: '/binding',
            name: 'binding',
            component: () => import('../components/Setup/Binding.vue')
        },
        {
            path: '/help',
            name: '/help',
            component: () => import('../components/Setup/Help.vue')
        },
        {
            path: '/opinion',
            name: 'opinion',
            component: () => import('../components/Setup/Opinion.vue')
        },
        {
            path: '/hottopic',
            name: 'hotTopic',
            component: () => import('../views/Find/HotTopic/HotTopic.vue')
        },
        {
            path: '/beauty',
            name: 'beauty',
            component: () => import('../views/Find/Beauty/Beauty.vue')
        },
        {
            path: '/hotgoods',
            name: 'hotGoods',
            component: () => import('../views/Find/HotGoods/HotGoods.vue')
        },
        {
            path: '/saihong',
            name: 'saiHong',
            component: () => import('../views/Sort/SaiHong/SaiHong.vue')
        },
        {
            path: '/homeactives',
            name: 'HomeActives',
            component: () => import('../views/Home/HomeActives/HomeActives.vue')
        },
        {
            path: '/homearticle',
            name: 'HomeArticle',
            component: () => import('../views/Home/HomeArticle/HomeArticle.vue')
        },
        {
            path: '/homesign',
            name: 'homeSign',
            component: () => import('../views/Home/HomeSign/HomeSign.vue')
        }, {
            path: '/homesearch',
            name: 'homeSearch',
            component: () => import('../views/Home/HomeSearch/HomeSearch.vue')
        },
        {
            path: '/homesearchlist',
            name: 'homeSearchList',
            component: () => import('../views/Home/HomeSearch/HomeSearchList.vue')
        },
        {
            path: '/homeselectedarticle',
            name: 'homeSelectedArticle',
            component: () => import('../views/Home/HomeArticle/HomeSelectedArticle/HomeSelectedArticle.vue')
        },
        {
            path: '/homecarousel',
            name: 'homeCarousel',
            component: () => import('../views/Home/HomeCarousel/HomeCarousel.vue')
        },
        // 首页展开评论页
        {
            path: '/homecommons',
            name: 'HomeCommons',
            component: () => import('../views/Home/HomeCarousel/HomeCommons.vue')
        },
    ]
})



















