import request from '../../../utils/request';

//获取所有的学生
export function studentall() {
    return request.get('/manger/student');
}

//获取所有的班级
export function classall() {
    return request.get('/manger/grade');
}


