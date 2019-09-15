import {action} from 'mobx';
import {studentall,classall} from '../../../../service/index';

// 引入mobx
class Studentall{

    @action async studentall(): Promise<any>{
        
        const result: any = await studentall();
        return result;
    }

    @action async classall(): Promise<any>{
        
        const result: any = await classall();
        return result;
    }
}

export default Studentall;