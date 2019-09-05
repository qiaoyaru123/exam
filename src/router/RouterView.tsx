import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

interface PropsInfo {
    routes:any
}

class RouterView extends React.Component<PropsInfo> {
   public render() {
        let {routes} = this.props;
        const RedirectArr = routes.filter((item:any)=>item.redirect);

        const redirectArr = RedirectArr.map((item:any,index:number)=>{
            return <Redirect key={index} from={item.path} to={item.redirect}/>
        })

        routes = routes.filter((item:any)=>!item.redirect)

        return (
            <Switch>
                 {
                     routes.map((item:any,index:number)=>{
                         return <Route key={index} path={item.path} render={(props)=>{
                             return <item.component {...props} children={item.children}></item.component>
                         }}></Route>
                     })
                 }
                 {
                     redirectArr.length!==0&&redirectArr
                 }
            </Switch>
        );
    }
}

export default RouterView;
