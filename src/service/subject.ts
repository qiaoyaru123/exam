import request from '../utils/request';

// 获取所有的课程
export let subject = ()=>{
    return request.get('/exam/subject');
}