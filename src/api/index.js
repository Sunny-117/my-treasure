
import axios from 'axios'
import { AUTH_TOKEN } from '@/utils/const.js'
const instance = axios.create({
    baseURL: 'https://study.duyiedu.com',
    timeout: 1000,
    // headers: {
    //     authorization: AUTH_TOKEN
    // }
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