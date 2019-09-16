import { observable, action } from "mobx";
import {
  login,
  userInfo,
  getViewAuthority,
  updateUserInfo
} from "../../service/index";

import { setToken, removeToken } from "../../utils/index";
let account = {};
if (window.localStorage.getItem("account")) {
  account = JSON.parse(window.localStorage.getItem("account") + "");
}
class User {
  @observable isLogin: boolean = false;
  @observable account: any = account;
  @observable viewAuthority:any = [];
  @observable avatar: string = "";
  @observable info:any= {};
  @action async login(form: any): Promise<any> {
    let result: any = await login(form);
    if (result.code === 1) {
      // 记住密码
      if (form.remember) {
        window.localStorage.setItem("account", JSON.stringify(form));
      } else {
        window.localStorage.removeItem("account");
      }
      // 七天免登陆
      if (form.autologin) {
        setToken(result.token);
      }
    }
    return result;
  }
  // 退出登陆，移除token
  @action async loginout(): Promise<any> {
    removeToken();
  }

  //获取当前用户信息
  @action async userInfo(): Promise<any> {
    const result: any = await userInfo();
    this.info=result.data
    this.avatar = result.data.avatar;
    return result;
  }
  //    // 获取用户权限
     @action async getViewAuthority(): Promise<any>{
      let viewAuthority: any = await getViewAuthority();
      console.log('viewAuthority...', viewAuthority);
      this.viewAuthority = viewAuthority.data;
  }

  // 修改用户头像
  @action changeAvatar(avatar: string): void {
    this.avatar = avatar;
  }

  // 更新用户信息
  @action async updateUserInfo(data: object): Promise<any> {
    let result: any = await updateUserInfo(data);
    await this.userInfo();
    return result;
  }
}

export default User;
