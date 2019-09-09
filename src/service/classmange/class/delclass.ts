import request from '../../../utils/request';

// 删除班级
export let delclass = (params:any)=>{
    return request.delete('/manger/grade/delete',params);
}


