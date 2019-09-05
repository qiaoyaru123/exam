import request from '../utils/request';

// 获取所有的试题类型
export let question = ()=>{
    return request.get('/exam/questions/condition');
}
