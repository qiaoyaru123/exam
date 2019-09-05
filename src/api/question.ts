
import request from "../utils/index";

export let getQuestion=()=>{
   return request.get('/exam/questions/condition')
}