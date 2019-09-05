import {observable, action} from 'mobx';
import {subject} from '../../service/index';

// 引入mobx

class Subject{

    @action async subject(): Promise<any>{
        const result: any = await subject();
        return result;
    }
}

export default Subject;