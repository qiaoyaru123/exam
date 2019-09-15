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

//编辑修改试题
export function setquestion(params:any){
    return request.put('/exam/questions/update',params);
}



