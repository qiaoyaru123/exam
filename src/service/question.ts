import request from '../utils/request';

// 获取所有的试题类型
export let question = (params:object)=>{
    return request.get('/exam/questions/condition',params);
}

//添加试题
export function addquestion(params: object) {
    return request.post('/exam/questions', params);
}

//获取头部列表数据
export function examsubject() {
    return request.get('/exam/subject');
}

//获取试卷列表
export function examlie() {
    return request.get('/exam/exam');
}




