import { Button, Form, Input, Layout, Select, Breadcrumb, Table } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import "./index.css";

const { Option } = Select;
const { Content } = Layout;

interface UserFormProps extends FormComponentProps {
  question: any,
  age: number;
  history: any,
  name: string,
  studentall:any,
  key:any,
  id:any,
  roomall:any,
  classall:any
}

const columns = [
  {
    title: '姓名',
    dataIndex: 'student_name',
    width: '20%',
  },
  {
    title: '学号',
    dataIndex: 'student_id',
    width: '20%',
  },{
    title: '班级',
    dataIndex: '',
    width: '20%',
  },
  {
    title: '教室',
    dataIndex: '',
    width: '20%',
  },
  {
    title: '密码',
    dataIndex: 'student_pwd',
    width: '20%',
  },
  {
    title: '操作',
    dataIndex: 'done',
    width: '20%',
  },
];


@inject('question','studentall','roomall')
@observer

class Student extends React.Component<UserFormProps, any> {
  state = {
    data: [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }],
    value: "",
    pagination: {},
    loading: false,
    list:[],
    roomall:[],
    classall:[],
    val:''
  }

  handleChanges(value: any) {
    this.setState({
      value
    })
  }

  handleTableChange = (pagination:any, filters:any, sorter:any) => {
        console.log(pagination, filters,sorter)
  };
  handlesou=async(e:any)=>{
    this.setState({
      val:e.target.value
    })
  }

  handlesearch=()=>{
    let {list,val} = this.state;
    let arr=list.filter((item:any)=>item.student_name.includes(val))
    console.log(arr);
    this.setState({
      list:arr
    })
  }

  public render() {
    let {value,roomall,classall ,val } = this.state;
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
          <Breadcrumb.Item>学生管理</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 530 }}>
          <div className="m-header-student">
            <Input placeholder="输入学生姓名..." value={val} onChange={this.handlesou}/>
            <Select defaultValue="" 
            style={{ width: 200, marginLeft: 30 }} 
            onChange={() => { this.handleChanges(value) }}>
                {
                  roomall.map((item: any, index: any) => {
                      return <Option value={item.room_id} key={index}>{item.room_text}</Option>
                  })
                }
            </Select>
            <Select value="" style={{ width: 200, margin: "0 30px" }} onChange={() => { this.handleChanges(value) }}>
              {
                  classall.map((item: any, index: any) => {
                      return <Option value={item.grade_name} key={index}>{item.grade_name}</Option>
                  })
                }
            </Select>
            <Button onClick={this.handlesearch}>搜索</Button>
            <Button>重置</Button>
          </div>
          <div className="m-item-stud">
            <Table
              columns={columns}
              rowKey={(record:any) =>{ 
              //console.log(record.id)  
                return record.id
              }}
              dataSource={this.state.list}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
            />
          </div>
        </div>
      </Content>
    )
  }


  componentDidMount(){
    this.getstuall();
    this.getroomall();
    this.getclassall();
  }

  getroomall = async()=>{
    const {roomall} = this.props.roomall;
    const result =await roomall();
    console.log(result.data);
    this.setState({
      roomall:result.data
    })
  }

  getclassall = async() =>{
    const {classall} = this.props.studentall;
    const result = await classall();
    
    this.setState({
      classall:result.data
    })
  }

  getstuall =async()=>{
    const {studentall} = this.props.studentall;
    const result =await studentall();
    result.data.map((item:any,index:any)=>{
     item.id=index+"",
     item.done='删除'
    })
    this.setState({
      list:result.data
    })
  }
}


export default Form.create()(Student);