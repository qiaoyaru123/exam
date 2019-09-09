import {observable, action} from 'mobx';
import {addclass} from '../../service/index';

// 引入mobx
class Question{

    @action async addclass(from:any): Promise<any>{
        console.log()
        const result: any = await addclass(from);
        return result;
    }
}

export default Question;