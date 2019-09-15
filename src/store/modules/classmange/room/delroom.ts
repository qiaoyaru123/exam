import {observable, action} from 'mobx';
import {delroom} from '../../../../service/index';

// 引入mobx
class Delroom{

    @action async delroom(from:any): Promise<any>{
       console.log(from,'------------------')
        const result: any = await delroom(from);
        return result;
    }
}

export default Delroom;