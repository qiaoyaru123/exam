import {observable, action} from 'mobx';
import {delclass} from '../../../../service/index';

// 引入mobx
class Delclass{

    @action async delclass(from:any): Promise<any>{
        console.log(from)
        const result: any = await delclass({data:from});
        return result;
    }
}

export default Delclass;