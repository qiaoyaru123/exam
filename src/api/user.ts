import request from "../utils/index"

//登录
export let login=(params:object)=>{
    return request.post('/user/login',params)
}
