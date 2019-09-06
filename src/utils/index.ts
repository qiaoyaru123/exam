/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-09-04 23:03:55
 * @LastEditors: sueRimn
 * @LastEditTime: 2019-09-04 23:10:54
 */
import * as Cookie from 'js-cookie';

const key = 'authorization';
export let getToken: () => any = () => {
    return Cookie.get(key);
}

export let setToken: (value: string) => void = (value) => {
    Cookie.set(key, value, { expires: 7 })
}

export let removeToken: () => void = () => {
    Cookie.remove(key);
}