
import request from '../utils/request';

//登陆
export function login(params: object) {
    return request.post('/user/login', params);
}