import * as React from 'react';
import './index.css';
import { Table } from 'antd';

import {inject,observer} from 'mobx-react';

const columns = [
    {
        title: '班级名',
        dataIndex: 'roomname',
    },
    {
        title: '课程名称',
        dataIndex: 'classname',
    },
    {
        title: '阅卷状态',
        dataIndex: 'ruestatus',
    },
    {
        title: '课程名称',
        uni: 'classname',
    },
    {
        title: '成材率',
        dataIndex: 'live',
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

const arr=[];


interface Props{
    examlist:any,
    allstu:any
}

@inject('allstu')
@observer




export default class Piclass extends React.Component <Props>{
    state={
        list:[]
    }
   
    render() {
        let {list} = this.state;
        {
            list.map((item:any,index:number)=>{
                return arr.push({
                   
                })
            })
        }
        return (
            <div className="wrap">
                <h1>待批班级</h1>
                <div className="qwe">
                    <div>
                        {/* <Table columns={columns} dataSource={data} size="middle" rowKey={(record:any)=>record.id}/> */}
                    </div>,
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getData();
    }

    getData=async ()=>{
        const {allstu} = this.props.allstu;
        const result = await allstu();
        console.log(result)
        this.setState({
            list:result
        })
    }
}



