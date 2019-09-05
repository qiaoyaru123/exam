import {observable, action} from 'mobx'
import {getQuestion} from '../../api/question'

class Question{

    // 按条件获取试题
    @action async getCheckfile(): Promise<any>{
        let result: any = await getQuestion();
        console.log(result,"...............");
        return result
    }
}

export default Question;