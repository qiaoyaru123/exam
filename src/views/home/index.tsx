import { Icon, Layout, Menu,Breadcrumb } from 'antd';
import * as React from 'react';
import {observer,inject} from "mobx-react"
import RouterView from "../../router/index";
import Checkfile from "./checkfile/index"
const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;
let datas:Array<object>=[
  {
      title: "试题管理",
      icon:"",
      son: ["添加试题","试题分类","查看试题"]
  },
  {
      title: "用户管理",
      son: ["添加用户","用户展示"] 
  },
  {
      title: "考试管理",
      son: ["添加试卷","试卷列表"] 
  },
  {
      title: "班级管理",
      son: ["班级管理","教室管理","学生管理"] 
  },
  {
      title: "试卷管理",
      son: ["待批班级"] 
  }
]
interface Props{
  routes:any,
  user:any,
  abc?:string

}

class Home extends React.Component {
  constructor(props:Props){
     super(props);
  }

  public onCollapse = (collapsed: any) => {
    this.setState({ collapsed });
  };
  
  public render() {
    return (
      <div className="box">
        <Header style={{ background: '#fff', padding: 0, height: 58 }}>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" className="title" />
          <span className="user">
            <img src="" alt="" />
            yu
                </span>
        </Header>
        <Layout style={{ minHeight: '91vh' }}>
          <Sider>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
              {
                datas.map((item:any,index)=>{
                return  <SubMenu
                  key={index}
                  title={
                    <span>
                      <Icon type="user" />
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  {
                    item.son.map((it:any,ind:number)=>{
                     return <Menu.Item key={ind}>{it}</Menu.Item>
                    })
                  }
                </SubMenu>
                })
              }
            </Menu>
          </Sider>
          <Layout>
            {/* <RouterView routes={this.props['routes']} /> */}
            <Checkfile/>
          </Layout>
        </Layout>
      </div>
    );
  }

}
export default Home
