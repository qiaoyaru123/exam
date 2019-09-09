import {observable, action} from 'mobx';
import {allstu} from '../../../service/stulist/allstu';

// 引入mobx
class Allstu{

    @action async allstu(): Promise<any>{
        console.log()
        const result: any = await allstu();
        return result.exam;
    }
}

export default Allstu;