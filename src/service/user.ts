
import request from '../utils/request';

//登陆
export function login(params: object) {
    return request.post('/user/login', params);
}

// 获取用户权限
export let getViewAuthority = ()=>{
    return request.get('/user/view_authority');
}

//获取当前用户信息
export function userInfo(){
    return request.get('/user/userInfo');
}

// 更新用户信息
export let updateUserInfo = (data: object)=>{
    return request.put('/user/user', data);
}