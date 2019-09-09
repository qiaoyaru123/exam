import {observable, action} from 'mobx';
import {question,addquestion} from '../../service/index';

// 引入mobx
class Question{

    @action async question(): Promise<any>{
        const result: any = await question();
        return result;
    }
    
    @action async addquestion(params:object):Promise<any>{
        const result: any = await addquestion(params);
        return result;
    }
}

export default Question;