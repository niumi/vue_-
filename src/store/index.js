import Vue from 'vue'
// import 'es6-promise/auto'
import Vuex from 'vuex'
import defaultState from "./defualtState"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import myPlugin from "./myPlugin"
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

/**
 * 创建Store仓库
 */
const store = new Vuex.Store({
    // 开启严格模式
    strict: process.env.NODE_ENV !== 'production',
    // 状态
    state: defaultState,
    mutations,
    actions,
    getters,
    plugins: [myPlugin, createLogger()]
})

/**
 * 热重载
 */

if (module.hot) {
    // 使 action 和 mutation、state和getters 成为可热重载模块
    module.hot.accept(["./defualtState","./mutations","./actions","./getters"],() =>{
        // 获取更新后的模块
        // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
        const newState = require("./defualtState").default
        const newMutations = require('./mutations').default
        const newActions = require("./actions").default
        const newGetters = require("./getters").default
        // 加载新模块
        store.hotUpdate({
            state:newState,
            mutations:newMutations,
            actions:newActions,
            getters:newGetters
        })
    })
}


export default store;