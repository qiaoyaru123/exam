import request from '../../../utils/request';

//添加教室


export function addroom(params: object) {
    return request.post('/manger/room', params);
}