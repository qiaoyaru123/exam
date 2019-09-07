// import { Button, Form, Icon, Input, Layout, Select, List, Avatar, Breadcrumb } from 'antd'
// import { FormComponentProps } from 'antd/lib/form';
// import * as React from 'react';
// import { inject, observer } from 'mobx-react';

// interface UserFormProps extends FormComponentProps {
//   question: any,
//   age: number;
//   history: any,
//   name: string,
//   state:any
// }

// const { Option } = Select;
// const { Content } = Layout;

// function handleChange(value: any) {
//   console.log(`selected ${value}`);
// }

// @inject('question')
// @observer
// class Checkfile extends React.Component<UserFormProps, any> {

//   constructor(props: any) {
//     super(props);
    
//   }
//   public state = {
//     datas: []
//   }
//   public async componentDidMount() {
//     const result = await this.props.question.question();
//     this.setState({ datas: result.data })
//   }
//   public render() {
//     let { datas } = this.state;
//     return (
//       <Content style={{ margin: '0 16px' }}>
//         <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
//           <Breadcrumb.Item>查看试题</Breadcrumb.Item>
//         </Breadcrumb>
//         <div style={{ padding: 24, background: '#fff', minHeight: 530 }}>
//           <div className="check">
//             <div className="header">
//               <div className="m-title">
//                 课程类型:<span>All</span><span>javaScript下</span><span>模块化开发</span><span>移动端开发</span><span>node基础</span>
//                 <span>组件化开发(vue)</span><span>组件化开发(react)</span><span>项目实战</span><span>javaScript高级</span><span>node高级</span>
//               </div>
//               <div className="m-input">
//                 <span>
//                   考试类型:
//               <Select defaultValue="" style={{ width: 200 }} onChange={handleChange}>

//                     <Option value="周考一">周考一</Option>
//                     <Option value="周考二">周考二</Option>
//                     <Option value="周考三">周考三</Option>
//                     <Option value="月考">月考</Option>

//                   </Select>
//                 </span>
//                 <span>
//                   题目类型:
//               <Select defaultValue="" style={{ width: 200 }} onChange={handleChange}>
//                     <Option value="简答题">简答题</Option>
//                     <Option value="代码阅读题">代码阅读题</Option>
//                     <Option value="代码补全题">代码补全题</Option>
//                     <Option value="修改bug">修改bug</Option>
//                     <Option value="手写代码">手写代码</Option>

//                   </Select>
//                 </span>
//                 <span><Button>查询</Button></span>
//               </div>
//             </div>
//             <div className="m-content-box">
//               <List
//                 itemLayout="horizontal"
//                 dataSource={datas}
//                 renderItem={(item: any) => (
//                   <List.Item>
//                     <div className="m-item">
//                       <span>{item.title}</span>
//                       <span><Button>{item.questions_type_text}</Button><Button>{item.subject_text}</Button><Button className="m-btn-col">{item.exam_name}</Button></span>
//                       <span>{item.subject_text}</span>
//                     </div>
//                     <div className="m-btns">编辑</div>
//                   </List.Item>
//                 )}
//               />
//             </div>
//           </div>

//         </div>
//       </Content>
//     )
//   }
// }


// export default Form.create()(Checkfile);



import * as React from 'react';
import {observer, inject} from 'mobx-react';
import "./index.css"

interface Listinfo{
    list:Array<object>,
    question:any,
    data:Array<object>,
    subject:any
}

// sumbject
@inject('question',"subject")
@observer

class CheckQuestion extends React.Component<Listinfo> {
    
    state = {
        list:[],
        subjectList:[]
    }

    constructor(props: any){
        super(props);
        
    }

    componentDidMount(){
        this.getQuestion()
        this.getSubject()
    }
   getQuestion=async ()=>{
        const {question} = this.props.question;
        const result = await question();
        
        this.setState({
            list:result.data
        })
    }

    getSubject=async ()=>{
        const {subject} = this.props.subject;
        const result = await subject();
        console.log(result)
        this.setState({
            subjectList:result.data
        })
    }

    public render() {
        const {list} = this.state

        return (
            <div className="conentPage">
                <header className="header">查看试卷</header>
                <div className="subjectBox">

                </div>
                <main className="main">
                    <ul className="list-subject-item">
                         {
                               list&&list.map((item:any)=>{
                                  return <li key={item.questions_id}>
                                      <div>
                                          <span>{item.title}</span>
                                      </div>
                                      <div>
                                          <p>
                                              <span>{item.questions_type_text}</span>
                                              <span>{item.subject_text}</span>
                                              <span>{item.exam_name}</span>
                                          </p>
                                          <p>
                                              <span>编辑</span>
                                          </p>
                                      </div>
                                      <div>
                                          <span>{item.user_name}发布</span>
                                      </div>
                                  </li>
                               })
                         }
                    </ul>
                </main>
            </div>
            
        )
    }

    
}

export default CheckQuestion;