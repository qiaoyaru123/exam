
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
