import request from '../utils/request';

// 获取所有的课程
export let week = ()=>{
    return request.get('/exam/examType');
}
//导出所有试题类型
export let subjects=()=>{
    return request.get('/exam/subject')
}

export let getQuestionsType=()=>{
    return request.get('/exam/getQuestionsType')
}