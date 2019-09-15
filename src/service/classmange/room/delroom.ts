import request from '../../../utils/request';

//添加教室


export function delroom(params:object) {
    return request.delete('/manger/room/delete',params);
}