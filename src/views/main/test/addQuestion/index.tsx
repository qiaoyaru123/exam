import * as React from 'react';
import { Button, Form, Icon, Input, Layout, Select, List, Avatar, Breadcrumb } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import Editor from 'for-editor';
import "./index.css"
const { Option } = Select;
const { Content } = Layout;

interface UserFormProps extends FormComponentProps {
    question: any,
    age: number;
    history: any,
    name: string;
}
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
@inject('question')
@observer
class AddQuestions extends React.Component<UserFormProps, any> {
    state = {
        data: [],
        value: '',
    }
   handleChanges(value:any) {
        this.setState({
          value
        })
      }
    public async componentDidMount() {
        // const result = await this.props.question.getCheckfile();
        // this.setState({ data: result.data })
    }
    public render() {
        let { data,value } = this.state;
    //   const {getFieldProps} = this.props.form
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
                    <Breadcrumb.Item>添加试卷</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 530 }}>
                    <div className="headers">
                        <div className="m-header-title">
                            题目信息
                      </div>
                        <div>
                            题干
                     </div>
                        <div className="m-input-add">
                            <Input placeholder="请输入题目标题,不超过20个字"/>
                        </div>
                    </div>

                    <div className="m-con">
                        题目主题
                        {/* <ul className="m-top-bottom">
                            <li className="m-icon">1</li>
                            <ul className="m-inp">
                                <li>1</li>
                                <li><textarea className="m-text"></textarea></li>
                            </ul>
                        </ul> */}
                         <Editor placeholder="请输入内容..." value={value} onChange={()=>{this.handleChanges(value)}}/>
                    </div>

                    <div className="m-item-ip">
                        请选择考试类型:
                        <Select defaultValue="" style={{ width: 200,display:"block" }} onChange={handleChange}>

                            <Option value="周考一">周考一</Option>
                            <Option value="周考二">周考二</Option>
                            <Option value="周考三">周考三</Option>
                            <Option value="月考">月考</Option>

                        </Select>
                    </div>

                    <div className="m-item-ip">
                        请选择课程类型:
                        <Select defaultValue="" style={{ width: 200,display:"block" }} onChange={handleChange}>
                            <Option value="简答题">简答题</Option>
                            <Option value="代码阅读题">代码阅读题</Option>
                            <Option value="代码补全题">代码补全题</Option>
                            <Option value="修改bug">修改bug</Option>
                            <Option value="手写代码">手写代码</Option>

                        </Select>
                    </div>

                    <div className="m-item-ip">
                        请选择题目类型:
                        <Select defaultValue="" style={{ width: 200,display:"block"}} onChange={handleChange}>
                            <Option value="简答题">简答题</Option>
                            <Option value="代码阅读题">代码阅读题</Option>
                            <Option value="代码补全题">代码补全题</Option>
                            <Option value="修改bug">修改bug</Option>
                            <Option value="手写代码">手写代码</Option>

                        </Select>
                    </div>
                    <div className="m-con">
                         答案信息
                         <Editor placeholder="请输入内容..." value={value} onChange={()=>{this.handleChanges(value)}}/>
                         <Button>提交</Button>
                    </div>
                  
                </div>
              
            </Content>
        )
    }
}


export default Form.create()(AddQuestions);








