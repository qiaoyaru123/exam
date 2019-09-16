import request from '../../utils/request';

//获取学生试卷
export function getexam() {
    return request.get('/manger/grade');
}

//批卷跳详情
export function xiangexam() {
    return request.get('/exam/student');
}

