import {observable, action} from 'mobx';
import {examall,typeadd} from '../../../service/examtype/index';

// 引入mobx
class Examall{

    @action async examall(): Promise<any>{
        
        const result: any = await examall();
       // console.log(result.data)
        return result.data;
    }


    @action async typeadd(): Promise<any>{
        
        const result: any = await typeadd();
       // console.log(result.data)
        return result.data;
    }
}

export default Examall;



    


