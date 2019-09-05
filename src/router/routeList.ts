
//一级路由
import Login from "../views/login";
import Home from '../views/home';

//二级路由
import Checkfile from "../views/home/checkfile"

export default {
    routes:[{
        path:"/login",
        component:Login
    },{
        path:"/home",
        component:Home,
        Children:[{
            path:"/checkfile",
            component:Checkfile
        }]
    }]
}



 

