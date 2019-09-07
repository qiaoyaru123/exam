
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