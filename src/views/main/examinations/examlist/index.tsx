
import * as React from 'react';
import { Button, Form, Icon, Input, Layout, Select, Tag, Avatar, Breadcrumb, List, Typography } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';

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
// @inject('question')
// @observer
class Examlist extends React.Component<UserFormProps, any> {
    state = {
        data: [],
        value: '',
    }
    handleChanges(value: any) {
        this.setState({
            value
        })
    }
    public async componentDidMount() {
        // const result = await this.props.question.getCheckfile();
        // this.setState({ data: result.data })
    }
    public render() {
        let { data, value } = this.state;
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
                    <Breadcrumb.Item>试卷列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 530 }}>
                    <div className="m-header-list">
                        考试类型:<Select defaultValue="" style={{ width: 200 }} onChange={() => { this.handleChanges(value) }}>

                            <Option value="周考一">周考一</Option>
                            <Option value="周考二">周考二</Option>
                            <Option value="周考三">周考三</Option>
                            <Option value="月考">月考</Option>

                        </Select>
                        课程:<Select defaultValue="" style={{ width: 200 }} onChange={() => { this.handleChanges(value) }}>

                            <Option value="javaScript上">javaScript上</Option>
                            <Option value="javaScript下">javaScript下</Option>
                            <Option value="模块化开发">模块化开发</Option>
                            <Option value="移动端开发">移动端开发</Option>
                            <Option value="node基础">node基础</Option>
                            <Option value="组件化开发(vue)">组件化开发(vue)</Option>
                            <Option value="渐进式开发(react)">渐进式开发(react)</Option>
                            <Option value="项目实战">项目实战</Option>
                            <Option value="javaScript高级">javaScript高级</Option>
                            <Option value="node高级">node高级</Option>

                        </Select>
                        <Button>查询</Button>
                    </div>
                    <div className="m-main-con">
                        <div className="m-main-content">

                            <div style={{ marginBottom: 16 ,background:"#fff"}}>
                              
                                <div className="Tag">
                                <span className="m-tag-title">试卷列表</span>
                                <span className="m-tag-item">
                                    <Tag>全部</Tag>
                                    <Tag>进行中</Tag>
                                    <Tag>已结束</Tag>
                                </span>
                                  
                                </div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={(item:any) => (
                                        <List.Item>
                                            <span>1</span>
                                            <span>2</span>
                                            <span>3</span>
                                            <span>4</span>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </Content>
        )
    }
}


export default Form.create()(Examlist);


