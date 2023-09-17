// 封装axios
// 1、请求通用（基地址：超时设置 请求出错的提示等）
// 2、向后端发请求的时候 需要根据后端需求设置请求头信息（登录的token）
// 3、响应的时候可能需要对后端提供的数据进行处理

import axios from 'axios'

// 创建一个新的axios实例来当作我们的axios
const instance = axios.create({
    // 请求基地址
    baseURL: 'https://cnodejs.org/api/v1',
    // 请求超时时间
    timeout: 5000,
    // 请求头设置 一般不在这里设置
    // headers: {}
});

// 请求拦截器--针对所有请求 将请求拦截处理后放行
// 请求的时候设置请求头
instance.interceptors.request.use(config => {
    // const token = "4df5a418s48f5a4ffd8v4"
    // if (token) {
    //     config.headers.Authorization = token
    // }
    return config
})

// 响应拦截器--针对所有请求
instance.interceptors.response.use(res => {
    // res：axios将后端的响应包装后的结果
    // res.data 请求结果
    return res.data
})

// 封装get post请求--只针对get post请求
// 请求基本上用get post方法

// export const getAction = (url, data) => instance.get(url, data)
// 不建议这样写 这种写法不好控制请求头

// 获取
// GET传递参数 一般直接在地址栏?后面拼上参数
// 比如/books?pageNum=1&pageSize=10
// 请求的时候params就会自动在地址栏拼接
export const getAction = (url, data) => instance({
    method: 'GET',
    url,
    params: data,
    // 请求头设置 有需要单独对get请求设置请求头的话 可以在此设置
    // headers
})

// 新增
export const postAction = (url, data) => instance({
    method: 'POST',
    url,
    data,
    // 请求头设置 有需要单独对get请求设置请求头的话 可以在此设置
    // headers
})

// 删除
export const deleteAction = (url, data) => instance({
    method: 'DELETE',
    url,
    data,
    // 请求头设置 有需要单独对get请求设置请求头的话 可以在此设置
    // headers
})

// 修改
export const patchAction = (url, data) => instance({
    method: 'PATCH',
    url,
    data,
    // 请求头设置 有需要单独对get请求设置请求头的话 可以在此设置
    // headers
})

export default instance
// export {
//     getAction,
//     postAction
// }