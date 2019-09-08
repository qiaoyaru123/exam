import {observable, action} from 'mobx';
import {examlist} from '../../service/index';

// 引入mobx
class Examlist{

    @action async examlist(): Promise<any>{
        const result: any = await examlist();
        return result;
    }
}

export default Examlist;