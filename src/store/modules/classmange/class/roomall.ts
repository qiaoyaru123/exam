import {observable, action} from 'mobx';
import {roomall} from '../../../../service/index';

// 引入mobx
class Roomall{
    @action async roomall(): Promise<any>{
       
        const result: any = await roomall();
        return result;
    }
}
export default Roomall;