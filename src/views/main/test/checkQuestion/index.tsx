import { Button, Form, Icon, Input, Layout, Select, List, Avatar, Breadcrumb } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import "./index.css"

//引入组件
import Week from "../../../../component/week"
import Type from "../../../../component/getQuestionsType"

interface UserFormProps extends FormComponentProps {
  question: any,
  age: number;
  history: any,
  name: string,
  state:any
}


const { Option } = Select;
const { Content } = Layout;

function handleChange(value: any) {
  console.log(`selected ${value}`);
}

@inject('question')
@observer
class Checkfile extends React.Component<UserFormProps, any> {

public state = {
    datas: []
  }
  public async componentDidMount() {
    const result = await this.props.question.question();
    this.setState({ datas: result.data })
  }
  public render() {
    let { datas } = this.state;
    return (
      <Content style={{ margin: '0 16px'}}>
        <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
          <Breadcrumb.Item>查看试题</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 530 ,height:"auto"}} className="m-max">
            <div className="header">
              <div className="m-title">
                课程类型:<span>All</span><span>javaScript下</span><span>模块化开发</span><span>移动端开发</span><span>node基础</span>
                <span>组件化开发(vue)</span><span>组件化开发(react)</span><span>项目实战</span><span>javaScript高级</span><span>node高级</span>
              </div>
              <div className="m-input-search">
                <span>
                  考试类型: 
                   <Week/>
                </span>
                <span>
                  题目类型:
                  <Type/>
                </span>
                <span><Button><Icon type="search" />查询</Button></span>
              </div>
              <List
                itemLayout="horizontal"
                dataSource={datas}
                renderItem={(item: any) => (
                  <List.Item>
                    <div className="m-item">
                      <span>{item.title}</span>
                      <span><Button>{item.questions_type_text}</Button><Button>{item.subject_text}</Button><Button className="m-btn-col">{item.exam_name}</Button></span>
                      <span>{item.subject_text}</span>
                    </div>
                    <div className="m-btns">编辑</div>
                  </List.Item>
                )}
              />
          </div>
         </div>
          
              

      </Content>
    )
  }
}


export default Form.create()(Checkfile);


