import request from '../../../utils/request';

// 获取课程名
export let xueall = ()=>{
    return request.get('/exam/subject');
}


