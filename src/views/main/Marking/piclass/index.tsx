import * as React from 'react';
import './index.css';
import { Table } from 'antd';
import {inject,observer} from 'mobx-react';

const columns = [
    {
        title: '班级名',
        dataIndex: 'grade_name',
    },
    {
        title: '课程名称',
        dataIndex: 'subject_text',
    },
    {
        title: '阅卷状态',
        dataIndex: 'ruestatus',
    },
    {
        title: '课程名称',
        dataIndex: 'subject_text',
    },
    {
        title: '成材率',
        dataIndex: 'room_text',
    },{
        title: '操作',
        dataIndex: 'done',
    }
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

interface Props{
    examlist:any,
    allstu:any,
    getexam:any,
    addclass:any,
    history:any
}

@inject('getexam')
@observer

export default class Piclass extends React.Component <Props>{
    state={
        list:[]
    }
   
    render() {
        let {list} = this.state;
        
        return (
            <div className="wrap">
                <h1>待批班级</h1>
                <div className="qwe">
                    <div>
                        <Table columns={columns} dataSource={list} size="middle" 
                        rowKey={(record: any) => {
                            console.log(record.id)
                            return record.id
                        }}
                        onRow={this.onClickRow}
                        />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getData();
    }

    onClickRow = (record:any)=>{
        return {
            onClick:()=>{
                console.log(record);
                let ind=record.id;
                console.log(ind); 
                this.getxiangexam(ind);
            }
        }
    }

    getxiangexam =async(ind:any) =>{
        let {history} = this.props;
        const {xiangexam} = this.props.getexam; 
        const result = await xiangexam();
        console.log(result.exam)
        let datas=result.exam[ind];
        history.push({
            pathname:`/main/Marking/pixiang/${datas.exam_student_id}`,
            query:datas
        })   
    }

    getData=async ()=>{
        const {getexam} = this.props.getexam;
        const result = await getexam();
        console.log(result.data);
        result.data.map((item:any,index:any)=>{
            item.done='批卷',
            item.id=index+''
        })
        this.setState({
            list:result.data
        })
    }
}



