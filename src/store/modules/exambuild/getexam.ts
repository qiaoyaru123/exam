import {observable, action} from 'mobx';
import {getexam,xiangexam} from '../../../service/index';

// 引入mobx
class GetExam{

    @action async getexam(): Promise<any>{   
        const result: any = await getexam();
        return result;
    }

    @action async xiangexam(): Promise<any>{
        const result: any = await xiangexam();
        return result;
    }
}

export default GetExam;