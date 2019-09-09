import * as React from 'react';
import { Modal, Button } from 'antd';
import './index.css';
import { Table } from 'antd';
import {observer,inject} from 'mobx-react';

const columns = [
    {
        title: '班级名',
        dataIndex: 'name',
    },
    {
        title: '课程名',
        dataIndex: 'classroom',
    },
    {
        title: '教室号',
        dataIndex: 'roomname',
    },{
        title:'操作',
        dataIndex:'done'
    }
];



let arr:any=[];

interface Props{
    student:any,
    grade_name:any,
    arr:any,
    banroom:any
    
}

@inject('student')
@observer

export default class Classbuild extends React.Component <Props>{
    state = {
        loading: false,
        visible: false,
        list:[],
        banroom:'',
        jiaoroom:'',
        classicon:''
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading,list,banroom,jiaoroom,classicon} = this.state;
        {
            list.map((item:any,index:number)=>{
                return arr.push({
                    name:item.grade_name,
                    classroom:item.subject_text,
                    roomname:item.room_text,
                    done:'修改|删除',
                    id:index+''
                        
                })
            })
        }

        return (
            <div className="wrap">
                <h1>班级管理</h1>
                <div className="nav">
                    <div className="dex">
                        <div className="handletou">
                            <Button type="primary" onClick={this.showModal}>
                                +添加班级
                             </Button>
                            <Modal
                                visible={visible}
                                title="添加班级名"
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                        取消
                                 </Button>,
                                    <Button key="submit" type="primary" loading={loading} onClick={this.handleok}>
                                        提交
                             </Button>,
                                ]}
                            >
                                <p>
                                    <div>*班级名</div>
                                    <div>
                                        <input type="text" onChange={this.handleadd} value={banroom} name="banroom"/>
                                    </div>
                                </p>
                                <p>
                                    <div>*教室号</div>
                                    <div>
                                        <input type="text" onChange={this.handleadd} value={jiaoroom} name="jiaoroom"/>
                                    </div>
                                </p>
                                <p>
                                    <div>*课程名</div>
                                    <div>
                                        <input type="text" onChange={this.handleadd} value={classicon} name="classicon"/>
                                    </div>
                                </p>

                            </Modal>
                        </div>
                        <div className="handletab">
                                <Table columns={columns} dataSource={arr} size="middle"  rowKey={(record:any)=>record.id}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getData();
    }

    handleadd = async(e:any)=>{
        console.log(11111111111)
        let name= e.target.name;
        console.log(name);
        this.setState({
            [name]:e.target.value
        },()=>{
            console.log(name)
        })
    }

    handleok = async() =>{
        let {banroom,jiaoroom,classicon} = this.state;
        console.log(banroom,jiaoroom,classicon);
        let obj={
            name:banroom,
            classroom:jiaoroom,
            roomname:classicon,
            done:'修改|删除'

        };
        arr.push(obj);
        console.log(arr)
    }

    getData=async()=>{
        const {student} = this.props.student;
        const result = await student();
        console.log(result);
        result.data.map((item:any,index:any)=>{
            item.id=index
        })
        let datas
        if(result.code === 1){
             datas=result.data.splice(1,8);
            console.log(datas)

        }
        this.setState({
            list:datas
        })
    }
}
