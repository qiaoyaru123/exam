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
import Student from "src/views/main/classManagement/student"
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
                        path: '/main/test/checkQuestion'
                    },
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
                    component:Examlist,
                    path:"/main/examinations/examlist"
                },{
                    path:"/main/examinations",
                    redirect:"/main/examinations/examlist"
                }]
            },
            {
                component: ClassManagement,
                path: '/main/classManagement',
                children:[{
                    path:"/main/classManagement/student",
                    component:Student
                },{
                   path:"/main/classManagement",
                   redirect:"/main/classManagement/student"
                }]
            },
            {
                component: Marking,
                path: '/main/Marking'
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