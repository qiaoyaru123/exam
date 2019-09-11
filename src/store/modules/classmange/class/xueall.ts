import { action} from 'mobx';
import {xueall} from '../../../../service/index';

// 引入mobx
class Xueall{
    @action async xueall(): Promise<any>{
       
        const result: any = await xueall();
        return result;
    }
}
export default Xueall;