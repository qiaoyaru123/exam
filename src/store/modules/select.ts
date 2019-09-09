import {action} from 'mobx';
import {week,subjects,getQuestionsType} from '../../service/index';

// 引入mobx

class Select{

    @action async week(): Promise<any>{
        const result: any = await week();
        return result;
    }
    @action async subjects(): Promise<any>{
        const result: any = await subjects();
        return result;
    }
    @action async getQuestionsType(): Promise<any>{
        const result: any = await getQuestionsType();
        return result;
    }
}



export default Select