import axios from "axios"
import qs from "querystring"

// 错误信息整理
const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            console.log("信息校验失败");
            break;
        case 401:
            console.log("认证失败");
            break;
        case 403:
            console.log("token校验失败");
            break;
        case 404:
            console.log("请求的资源不存在");
            break;
        default:
            console.log(other);
            break;
    }
}

// 创建axios实例对象
var instance = axios.create({ timeout: 3000 });
// axios全局配置
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.common['Authorization'] = localStorage.getItem("token");

// 拦截器
instance.interceptors.request.use(function (config) {
    if (config.method === "post") {
        config.data = qs.stringify(config.data);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截
instance.interceptors.response.use(
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    error => {
        /**
         * error= {
         *  res:错误信息
         * }
         */
        const { response } = error;
        if (response) {
            errorHandle(response.status, response.data);
            return Promise.reject(response);
        } else {
            console.log("请求失败");
        }
    }
);

export default instance