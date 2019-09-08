import {observable, action} from 'mobx';
import {adduser} from '../../service/index';

// 引入mobx
class Question{

    @action async adduser(from:any): Promise<any>{
        console.log()
        const result: any = await adduser(from);
        return result;
    }
}

export default Question;