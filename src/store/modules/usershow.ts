import {observable, action} from 'mobx';
import {userShow} from '../../service/index';

// 引入mobx
class UserShow{

    @action async userShow($url:string): Promise<any>{
        console.log()
        const result: any = await userShow($url);
        return result;
    }
}

export default UserShow;