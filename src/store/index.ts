// 引入user模块
import User from "./modules/user";
import Question from './modules/question';
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
import Examall from './modules/examtype';
import Roomall from './modules/classmange/class/roomall';
import Xueall from './modules/classmange/class/xueall';
import SelectValue from "./modules/selectvalue";
import Delroom from './modules/classmange/room/delroom';
import Studentall from './modules/classmange/student/studentall';
import GetExam from './modules/exambuild/getexam';

// 实例化
const user =new User()   
const question =new Question();   
const subject =new Subject();  
const adduser =  new Adduser(); 
const usershow =new  Usershow ()
const select=new Select()
const student = new Student();
const room = new Room();
const allstu = new Allstu();
const addclass = new Addclass();
const addroom =new Addroom();
const delclass = new Delclass();
const examall = new Examall();
const roomall = new Roomall();
const xueall = new Xueall();
const selectvalue=new SelectValue();
const delroom = new Delroom();
const studentall= new Studentall();
const getexam = new GetExam();


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
    delclass,
    examall,
    roomall,
    xueall,
    selectvalue,
    delroom,
    studentall,
    getexam
};