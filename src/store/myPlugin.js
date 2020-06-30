const myPlugin = store => {
    store.subscribe((mutation,state) => {
        // 日志信息
        console.log(mutation.type,mutation.payload);
    })
}

export default myPlugin