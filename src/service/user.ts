
import request from '../utils/request';

//登陆
export function login(params: object) {
    return request.post('/user/login', params);
}

//获取当前用户信息
export function userInfo(){
    return request.get('/user/userInfo');
}