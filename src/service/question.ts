import request from '../utils/request';

// 获取所有的试题类型
export let question = ()=>{
    return request.get('/exam/questions/condition');
}


//添加试题

export function addquestion(params: object) {
    return request.post('/exam/questions', params);
}


