import request from '../../utils/request';

//  获取所有的试题
export function examall() {
    return request.get('/exam/getQuestionsType');
}

//添加试题类型
export function typeadd() {
    return request.get('/exam/insertQuestionsType');
}