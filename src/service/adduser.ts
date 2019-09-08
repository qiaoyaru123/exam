import request from '../utils/request';

//添加用户


export function adduser(params: object) {
    return request.post('/user', params);
}