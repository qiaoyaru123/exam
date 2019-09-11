import request from '../utils/request';

// 获取所有的课程
export let student = ()=>{
    return request.get('/manger/grade');
}