import {observable,action} from "mobx";
import {login} from "../../api/index";
import {setToken,removeToken} from "../../utils/cookie"
import { formatCountdown } from 'antd/lib/statistic/utils';
interface LoginForm{
    user_name: string,
    user_pwd: string
}

enum HttpType{
    object,
    Array
}

interface HttpInfo{
    code: number,
    messgae: string,
    data?: HttpType
}
class User{
    @observable isLogin:boolean =false;
    @action async login(form:any):Promise<any>{
        let result:any=await login(form);
        if(result.code===1){
            if(form.remember){
                window.localStorage.setItem("account",JSON.stringify(form))
                setToken(result.token)
            }else{
                window.localStorage.removeItem("account")
            }
        }
        if(form.autoLogin){
            setToken(result.token)
        }
        return result
    }
}

export default User
