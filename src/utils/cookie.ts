
import * as Cookie from "js-cookie";

const key="authorization";
//获取Token
export let getToken:()=>any=()=>{
    return Cookie.get(key)
}
//设置Token
export let setToken:(value:string)=>void=(value)=>{
    Cookie.set(key,value,{expires:7})
}

//删除Token

export let removeToken:(value:string)=>void=(value)=>{
    Cookie.remove(key)
}