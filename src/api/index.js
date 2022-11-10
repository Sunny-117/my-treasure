
import axios from 'axios'
const instance = axios.create({
    // baseURL: 'https://open.duyiedu.com',
    baseURL: 'https://study.duyiedu.com',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});


instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const { data } = response
    return {
        data,
    };
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance