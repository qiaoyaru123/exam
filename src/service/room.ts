import request from '../utils/request';

// 获取所有的试题类型
export let room = ()=>{
    return request.get('/manger/room');
}


