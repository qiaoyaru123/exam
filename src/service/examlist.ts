import request from '../utils/request';

//待批班级


export let examlist = ()=>{
    return request.get('/exam/student');
}