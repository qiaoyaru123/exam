import request from '../utils/request';

// 获取用户数据
export function userShow (url:string){
    return request.get(url);
}
