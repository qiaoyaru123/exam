<<<<<<< HEAD
import { Button, Form, Input, Layout, Select, Breadcrumb, Table ,Upload} from 'antd'
=======
import { Button, Form, Input, Layout, Select, Breadcrumb, Table } from 'antd'
>>>>>>> f4f8897a2648dcfc3336f0f35b569a6181c41336
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import "./index.css";
<<<<<<< HEAD
import * as XLSX from "xlsx"
=======
>>>>>>> f4f8897a2648dcfc3336f0f35b569a6181c41336

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
<<<<<<< HEAD
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
=======
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
>>>>>>> f4f8897a2648dcfc3336f0f35b569a6181c41336
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
<<<<<<< HEAD
    this.setState({
      list:arr
    })

   /* // 前端模糊搜索
    list.filter((item:any)=>{
      let flag=true;
      if(status_name){
        flag=flag&&status_name===item.student_name
      }
      if(grade_id){
       flag=flag&&grade_id===item.grade_id
      }
      if(room_id){
        flag=flag&&room_id===item.room_id
       }
       return flag
    })*/
  
  }

//导出文件
  channelExcel=()=>{
    //1.把table里面的数据转换成weeksheet
    let weeksheet=XLSX.utils.json_to_sheet(this.state.list);

    //2.把workshell放到workbook里
    let wookbook=XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wookbook,weeksheet)
    // 可导出多条
    // XLSX.utils.book_append_sheet(wookbook,weeksheet)
    // XLSX.utils.book_append_sheet(wookbook,weeksheet)
    // XLSX.utils.book_append_sheet(wookbook,weeksheet)
    
    XLSX.writeFile(wookbook,"学生名单.xlsx")
   }

   //导入文件
   deriveExcel=(file:any)=>{
     let reader=new FileReader();
     console.log(file)
     reader.onload=(e:any)=>{
        let  data=new Uint8Array(e.target.result);
        let  wookbook=XLSX.read(data,{type:"array"})
        // console.log(wookbook.Sheets.Sheet1)
        let datas=XLSX.utils.sheet_to_json(wookbook.Sheets.Sheet1);
        // console.log(datas)
     }
    reader.readAsArrayBuffer(file)
     return false
   }

   deriveExce=(file:any)=>{
    let reader=new FileReader();
   
  console.log(file.target.files[0])
   //  reader.onload=function(e:any){
   //     let  data=new Uint8Array(file);
   //     let  wookbook=XLSX.read(data,{type:"array"})
   //     console.log(wookbook)
   //     return wookbook
   //  }
   //  reader.readAsArrayBuffer(file)
    return false
=======
    console.log(arr);
    this.setState({
      list:arr
    })
>>>>>>> f4f8897a2648dcfc3336f0f35b569a6181c41336
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
            <Button onClick={this.channelExcel}>
                  导出
               </Button>
              <Upload
                beforeUpload={this.deriveExcel}
              >
                <Button>导入</Button>
              </Upload>
              <Button>
                <input type="file" onChange={this.deriveExce}/>
              </Button>
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
<<<<<<< HEAD
=======
    console.log(result.data);
>>>>>>> f4f8897a2648dcfc3336f0f35b569a6181c41336
    this.setState({
      roomall:result.data
    })
  }

  getclassall = async() =>{
    const {classall} = this.props.studentall;
    const result = await classall();
<<<<<<< HEAD
=======
    
>>>>>>> f4f8897a2648dcfc3336f0f35b569a6181c41336
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