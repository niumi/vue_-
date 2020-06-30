import router from './index'
import store from '../store/index'

router.beforeEach((to, from, next) => {
    if (to.matched.some(item => item.meta.isLogin)) {
        let token = store.state.token || localStorage.getItem('token');
        //需要登录，验证token
        console.log(token)
        if (token) {
            next()
        } else {
            next({ path: '/login',query:{from:to.fullPath} })
        }
    } else {
        //无需登录
        next()
    }
})
