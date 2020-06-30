import store from "./index"

// 注册模块 `myModule`
store.registerModule('myModule', {
    state: {
        myModuleCount: 100
    },
    mutations: {

    },
    acitons: {

    }
})

store.unregisterModule("myModule");