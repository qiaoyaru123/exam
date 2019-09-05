// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Subject from "./modules/subject";

// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject();   

export default {
    user,
    question,
    subject
};