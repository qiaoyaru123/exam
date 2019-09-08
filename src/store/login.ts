// 引入user模块
import User from "./modules/user";
import Question from "./modules/question";
import Subject from "./modules/subject";
import Adduser from './modules/adduser';
import Student from './modules/student';
import Room from './modules/room';
import Allstu from './modules/stulist/allstu';

// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject();  
const adduser =  new Adduser(); 
const student = new Student();
const room = new Room();
const allstu = new Allstu();

export default {
    user,
    question,
    subject,
    adduser,
    student,
    room,
    allstu
};