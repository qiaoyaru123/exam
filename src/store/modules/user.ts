/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:16:29
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-05 08:50:26
 */
import { observable, action } from 'mobx';
import { login } from '../../service/index';
import { LoginForm } from '../../types/index';
import { setToken,removeToken } from '../../utils/index';
let account = {};
if (window.localStorage.getItem('account')) {
    account = JSON.parse(window.localStorage.getItem('account') + "")
}
class User {

    @observable isLogin: boolean = false;
    @observable account: any = account;

    @action async login(form: any): Promise<any> {
        let result: any = await login(form);
        if (result.code === 1) {
            // 记住密码
            if (form.remember) {
                window.localStorage.setItem('account', JSON.stringify(form));
            } else {
                window.localStorage.removeItem('account');
            }
            // 七天免登陆
            if (form.autologin) {
                setToken(result.token)
            }
            
        }
        return result;
    }
    // 退出登陆，移除token
    @action async loginout(): Promise<any> {
        removeToken()
    }
}

export default User;