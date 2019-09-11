import request from '../../../utils/request';

// 获取教室
export let roomall = ()=>{
    return request.get('/manger/room');
}


