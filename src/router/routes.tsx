// import Login from "../views/login";
// import Main from '../views/main';
// import Test from 'src/views/main/test';
// import Management from 'src/views/main/management';
// import Examinations from 'src/views/main/examinations';
// import ClassManagement from 'src/views/main/classManagement';
// import Marking from 'src/views/main/Marking';
// import AddQuestion from 'src/views/main/test/addQuestion';
// import Testlist from 'src/views/main/test/testlist';
// import CheckQuestion from 'src/views/main/test/checkQuestion';
// import Showuser from "src/views/main/management/showuser"
// import Adduser from "src/views/main/management/adduser";
// import Examlist from "src/views/main/examinations/examlist";
// import Student from "src/views/main/classManagement/student/index"
// import Addexam from 'src/views/main/examinations/addexam/index';
// import Classbuild from 'src/views/main/classManagement/classbuild/index';
// import Roombuild from 'src/views/main/classManagement/roombuild/index';
// import Piclass from 'src/views/main/Marking/piclass/index';
// import Messagepage from "../views/main/test/messagepage/index"
// import Detailpage from "src/views/main/test/detail/detailpage"

import * as React from "react";
import * as Loadable from "react-loadable";

function Loading() {
  return <div>...Loading</div>;
}

let Login = Loadable({
  loading: Loading,
  loader: () => import("../views/login")
});
let Main = Loadable({
  loading: Loading,
  loader: () => import("../views/main")
});
let Test = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/test")
});
let Management = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/management")
});
let Examinations = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/examinations")
});
let ClassManagement = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/classManagement")
});
let Marking = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/Marking")
});
let AddQuestion = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/test/addQuestion")
});
let Testlist = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/test/testlist")
});
let CheckQuestion = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/test/checkQuestion")
});
let Showuser = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/management/showuser")
});
let Adduser = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/management/adduser")
});
let Examlist = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/examinations/examlist")
});
let Student = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/classManagement/student/index")
});
let Addexam = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/examinations/addexam/index")
});
let Classbuild = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/classManagement/classbuild/index")
});
let Roombuild = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/classManagement/roombuild/index")
});
let Piclass = Loadable({
  loading: Loading,
  loader: () => import("src/views/main/Marking/piclass/index")
});
let Messagepage = Loadable({
  loading: Loading,
  loader: () => import("../views/main/test/messagepage/index")
});
let Detailpage = Loadable({
  loading: Loading,
  loader: () => import("../views/main/test/detailpage/index")
});

let Pixiang = Loadable({
  loading:Loading,
  loader :() => import('../views/main/Marking/pixiang/index')
})

// export default [
//   {
//     path:"/login",
//     component: Login,
//   },
//   { 
//       path:"/main",
//       component:Main,
//       children:[{
//           path:"/main/text",
//           component:Test,
//           children:[
//             {
//             path: "/main/test/addQuestion",
//             component: AddQuestion,
//           },
//           {
//             path: "/main/test/testlist",
//             component: Testlist,   
//           },{
//             path: "/main/test/checkQuestion",
//             component: CheckQuestion,     
//           },{
//             path: "/main/test/Messagepage",
//             component: Messagepage,
//           },
//             {
//             path:"/main/test",
//             redirect: "/main/test/checkQuestion"
//           }]
//       }],
     
//   },
//   {
//     path:"/",
//     redirect: "/login"
//   },
  
// ];

export default [
    {
        component: Login,
        path: "/login"
    },
    {
        children: [
            {
                component: Test,
                path: "/main/test",
                children: [
                    {
                        path: "/main/test",
                        redirect: "/main/test/checkQuestion"
                    },
                    {
                        component: AddQuestion,
                        path: "/main/test/addQuestion"
                    },
                    {
                        component: Testlist,
                        path: "/main/test/testlist"
                    },
                    {
                        component: CheckQuestion,
                        path: "/main/test/checkQuestion"
                    },
                    {
                        component: Messagepage,
                        path: "/main/test/Messagepage"
                    },
                    {
                      component: Detailpage,
                      path: "/main/test/Detailpage"
                  }
                ]
            },
            {
                component: Management,
                path: "/main/management",
                children: [

                    {
                        path: "/main/management",
                        redirect: "/main/management/adduser"
                    },
                    {
                        component: Showuser,
                        path: "/main/management/showuser"
                    },
                    {
                        component: Adduser,
                        path: "/main/management/adduser"
                    }
                ]
            },
            {
                component: Examinations,
                path: "/main/examinations",
                children: [
                    {
                        path: "/main/examinations/addExaminations",
                        component: Addexam
                    },
                    {
                        path: "/main/examinations/listExaminations",
                        component: Examlist
                    },
                    {
                        path: "/main/examinations",
                        redirect: "/main/examinations/addExaminations"
                    }
                ]
            },
            {
                component: ClassManagement,
                path: "/main/classManagement",
                children: [
                    {
                        path: "/main/classManagement/studentManagement",
                        component: Student
                    },
                    {
                        path: "/main/classManagement/classRoom",
                        component: Classbuild
                    },
                    {
                        path: "/main/classManagement/classment",
                        component: Roombuild
                    },
                    {
                        path: "/main/classManagement",
                        redirect: "/main/classManagement/classRoom"
                    }
                ]
            },
            {
                component: Marking,
                path: "/main/Marking",
                children: [
                    {
                        path: "/main/Marking/piclass",
                        component: Piclass
                    },
                    {
                      path:'/main/Marking/pixiang/:id',
                      component:Pixiang
                    },
                    {
                        path: "/main/Marking",
                        redirect: "/main/Marking/piclass"
                    }
                ]
            },
            {
                path: "/main",
                redirect: "/main/test"
            }
        ],
        component: Main,
        path: "/main"
    },
    {
        path: "/",
        redirect: "/login"
    }
];
