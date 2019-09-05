export const sliderBar = [{
    id: "test",
    name: "试题管理",
    path: "/main/test",
    icon: "calendar",
    children: [
        {
        id: "Add",
        name: "添加试题",
        path: "/main/test/addQuestion"
    },
    {
        id: "Testlist",
        name: "试题分类",
        path: "/main/test/testlist"
    },{
        id: "CheckQuest",
        name: "查看试题",
        path: "/main/test/checkQuestion"
    }]
},
{
    id: "management",
    name: "用户管理",
    path: "/main/management",
    icon: "user",
    children:[
        {
            id: "Adduser",
            name: "添加用户",
            path: "/main/management/adduser"
        },{
            id: "Show",
            name: "用户展示",
            path: "/main/management/showuser"
        }
    ]
},
{
    id: "Examinations",
    name: "考试管理",
    path: "/main/examinations",
    icon: "barcode",
    children:[
        {
            id: "addExaminations",
            name: "添加考试",
            path: "/main/examinations/addExaminations"
        },
        {
            id: "listExaminations",
            name: "添加考试",
            path: "/main/examinations/listExaminations"
        }
    ]
},
{
    id: "ClassManagement",
    name: "班级管理",
    path: "/main/classManagement",
    icon: "pic-center",
    children:[
        {
            id: "classRoom",
            name: "班级管理",
            path: "/main/classManagement/classRoom"
        },
        {
            id: "classment",
            name: "教室管理",
            path: "/main/classManagement/classment"
        },
        {
            id: "studentManagement",
            name: "学生管理",
            path: "/main/classManagement/studentManagement"
        }
    ]
},{
    id: "MarkingManagement",
    name: "阅卷管理",
    path: "/main/Marking",
    icon: "upload",
    children:[
        {
            id: "Marking",
            name: "待批班级",
            path: "/main/classManagement/Marking"
        }
    ]
}]