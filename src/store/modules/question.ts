import {observable, action} from 'mobx';
import {question,addquestion,examsubject,setquestion} from '../../service/index';

// 引入mobx
class Question{
    //获取初始数据
    @action async question(params:object): Promise<any>{
        const result: any = await question(params);
        return result;
    }

    //添加问题
    @action async addquestion(params:object):Promise<any>{
        const result: any = await addquestion(params);
        return result;
    }

    //筛选数据
    @action async examsubject():Promise<any>{
        const result: any = await examsubject();
        return result;
    }
    
    //修改试题
    @action async setquestion(params:any):Promise<any>{
        const result: any = await setquestion(params);
        return result;
    }
}

export default Question;