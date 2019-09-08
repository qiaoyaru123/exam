// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Subject from "./modules/subject";
import Adduser from './modules/adduser';
import Usershow from "./modules/usershow"
// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject();  
const adduser =  new Adduser(); 
const  usershow =new  Usershow ()
export default {
    user,
    question,
    subject,
    adduser,
    usershow
};