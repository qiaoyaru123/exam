/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-03 20:24:50
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-04 23:42:14
 */
export interface LoginForm {
    user_name: string,
    user_pwd: string,
    remember: boolean,
    autologin: boolean
}
export enum HttpType {
    object,
    Array
}

export interface HttpInfo {
    code: number,
    message: string,
    data: HttpType
}
