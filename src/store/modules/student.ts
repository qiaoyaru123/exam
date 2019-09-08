import {action} from 'mobx';
import {student} from '../../service/index';

// 引入mobx

class Student{

    @action async student(): Promise<any>{
        const result: any = await student();
        return result;
    }
}

export default Student;