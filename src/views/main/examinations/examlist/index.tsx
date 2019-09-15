
import * as React from 'react';
import { Button, Form, Icon, Input, Layout, Select, Tag, Avatar, Breadcrumb, List, Typography ,Table} from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import "./index.css";

const { Option } = Select;
const { Content } = Layout;

const columns = [
    {
      title: '试卷信息',
      dataIndex: 'title',
    },
    {
      title: '班级',
      dataIndex: 'grade_name',
    },
    {
      title: '创建人',
      dataIndex: 'user_name',
    },
    {
        title: '开始时间',
        dataIndex: 'start',
      },
      {
        title: '结束时间',
        dataIndex: 'end',
      },
      {
        title: '操作',
        dataIndex: 'done',
      },
  ];

interface UserFormProps extends FormComponentProps {
    question: any,
    age: number;
    history: any,
    name: string;
    start:number
}

function handleChange(value: any) {
    console.log(`selected ${value}`);
}

@inject('question')
@observer

class Examlist extends React.Component<UserFormProps, any> {
    state = {
        data: [],
        value: '',
        list:[]
    }
    handleChanges(value: any) {
        this.setState({
            value
        })
    }
    public async componentDidMount() {
        // const result = await this.props.question.getCheckfile();
        // this.setState({ data: result.data })
        this.getexamlie();
    }
    public render() {
        let { data, value,list } = this.state;
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
                                {/* <List
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
                                /> */}
                            </div>
                        </div>
                    </div>

                    <div className="vav">
                    <Table columns={columns} dataSource={list} size="middle" 
                    rowKey={(record: any) => {
                        console.log(record.id)
                        return record.id
                    }}
                    />
                    </div>
                </div>
            </Content>
        )
    }

    getexamlie=async()=>{
        const {examlie} = this.props.question;
        //console.log(examlie)
        const result= await examlie();
        console.log(result.exam);
        let start

        result.exam.map((item:any,index:any)=>{
            item.id=index+''
            item.done='详情'
            start=item.start_time,
            item.end= item.end_time/1000/60/60/24  
        })

        // const date=start;
        // console.log(date);
        // const Y=date.getFullYear()+'-'
        // const M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)+'-'
        // const D=date.getDate()+''
        // const h=date.getHours()+':'
        // const m=date.getMinutes()+':'
        // const s=date.getSeconds()
        // const startDate=Y+M+D+h+m+s;
        // console.log(startDate); 

        this.setState({
            list:result.exam
        })
      }
}


export default Form.create()(Examlist);


