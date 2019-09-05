import {observable, action} from 'mobx';
import {question} from '../../service/index';

// 引入mobx
class Question{

    @action async question(): Promise<any>{
        const result: any = await question();
        return result;
    }
}

export default Question;