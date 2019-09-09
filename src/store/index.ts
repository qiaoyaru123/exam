// 引入user模块
import User from "./modules/user";
import Question from "./modules/classmange/student/question";
import Subject from "./modules/subject";
import Adduser from './modules/adduser';
import Usershow from "./modules/usershow"
import Select from "./modules/select"
import Student from './modules/student';
import Room from './modules/room';
import Allstu from './modules/stulist/allstu';
import Addclass from './modules/classmange/class/addclass';
import Addroom from './modules/classmange/room/addroom';
import Delclass from './modules/classmange/class/delclass';

// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject();  
const adduser =  new Adduser(); 
const  usershow =new  Usershow ()
const select=new Select()
const student = new Student();
const room = new Room();
const allstu = new Allstu();
const addclass = new Addclass();
const addroom =new Addroom();
const delclass = new Delclass();

export default {
    user,
    question,
    subject,
    adduser,
    usershow,
    select,
    student,
    room,
    allstu,
    addclass,
    addroom,
    delclass
};