import request from '../utils/request';

//添加用户


export function addclass(params: object) {
    return request.post('/manger/grade', params);
}