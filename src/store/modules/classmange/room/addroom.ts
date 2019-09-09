import {observable, action} from 'mobx';
import {addroom} from '../../../../service/index';

// 引入mobx
class Addroom{

    @action async addroom(from:any): Promise<any>{
        console.log()
        const result: any = await addroom(from);
        return result;
    }
}

export default Addroom;