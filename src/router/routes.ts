import Login from "../views/login";
import Main from '../views/main';
import Test from 'src/views/main/test';
import Management from 'src/views/main/management';
import Examinations from 'src/views/main/examinations';
import ClassManagement from 'src/views/main/classManagement';
import Marking from 'src/views/main/Marking';
import AddQuestion from 'src/views/main/test/addQuestion';
import Testlist from 'src/views/main/test/testlist';
import CheckQuestion from 'src/views/main/test/checkQuestion';
import Showuser from "src/views/main/management/showuser"
import Adduser from "src/views/main/management/adduser";
import Examlist from "src/views/main/examinations/examlist";
import Student from "src/views/main/classManagement/student/index"
import Addexam from 'src/views/main/examinations/addexam/index';
import Classbuild from 'src/views/main/classManagement/classbuild/index';
import Roombuild from 'src/views/main/classManagement/roombuild/index';
import Piclass from 'src/views/main/Marking/piclass/index';
import Messagepage from "../views/main/test/messagepage/index"
// import Detailpage from "src/views/main/test/detail/detailpage"
// import {lazy, Suspense } from 'react';
// const Login = lazy(() => import('../views/login'))
// const Main = lazy(() => import('../views/main'))


export default [{
        component: Login,
        path: '/login'
    },
    {
        children: [
            {
                component: Test,
                path: '/main/test',
                children:[
                    {
                        path: '/main/test',
                        redirect: '/main/test/checkQuestion'
                    },
                    {
                        component: AddQuestion,
                        path: '/main/test/addQuestion'
                    },
                    {
                        component: Testlist,
                        path: '/main/test/testlist'
                    },
                    {
                        component: CheckQuestion,
                        path: '/main/test/checkQuestion',
                    },
                    {
                        component:Messagepage,
                        path:'/main/test/Messagepage'
                    }
                ]
            },
            {
                component: Management,
                path: '/main/management',
                children:[,{
                    path:"/main/management",
                    redirect:"/main/management/adduser"
                },{
                    component: Showuser,
                    path:"/main/management/showuser",
                },{
                    component:Adduser,
                    path:"/main/management/adduser"
                }]
            },
            {
                component: Examinations,
                path: '/main/examinations',
                children:[{
                    path:'/main/examinations/addExaminations',
                    component:Addexam
                },{
                    path:'/main/examinations/listExaminations',
                    component:Examlist
                },{
                    path: '/main/examinations',
                    redirect: '/main/examinations/addExaminations'
                }]
            },
            {
                component: ClassManagement,
                path: '/main/classManagement',
                children:[{
                    path:"/main/classManagement/studentManagement",
                    component:Student
                },{
                    path:'/main/classManagement/classRoom',
                    component:Classbuild
                },{
                    path:'/main/classManagement/classment',
                    component:Roombuild
                },{
                    path: '/main/classManagement',
                    redirect: '/main/classManagement/classRoom'
                }]
            },
            {
                component: Marking,
                path: '/main/Marking',
                children:[{
                    path:'/main/Marking/piclass',
                    component:Piclass
                },{
                    path: '/main/Marking',
                    redirect: '/main/Marking/piclass'
                }]
            },
            {
                path: '/main',
                redirect: '/main/test'
            },
        ],
        component: Main,
        path: '/main'
    },
    {
        path: '/',
        redirect: '/login'
    }

]