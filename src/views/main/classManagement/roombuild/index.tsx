import * as React from 'react';
import { Modal, Button } from 'antd';
import './index.css';
import { Table } from 'antd';
import {observer, inject} from 'mobx-react';


const columns = [
    {
        title: '教室号',
        dataIndex: 'holl',
    },
    {
        title: '操作',
        dataIndex: 'action',
    },
    
];


const arr:any=[];




interface Props{
    room:any,
    result:any,
    arr:any,
   
}


@inject('room')
@observer

export default class Classbuild extends React.Component<Props> {
    state = {
        loading: false,
        visible: false,
        list:[]
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
        const { visible, loading,list } = this.state;


        {
            list.map((item:any,index:number)=>{
                return arr.push({
                    holl:item.room_text,
                    action:'删除',
                    id:index+''
                })
            })
        }

        return (
            <div className="wrap">
                <h1>教室管理</h1>
                <div className="nav">
                    <div className="dam">
                        <div className="handletou">
                            <Button type="primary" onClick={this.showModal}>
                                +添加教室
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
                                    <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                        提交
                             </Button>,
                                ]}
                            >
                                <p>
                                    <div>*班级名</div>
                                    <div>
                                        <input type="text" />
                                    </div>
                                </p>
                                <p>
                                    <div>*教室号</div>
                                    <div>
                                        <input type="text" />
                                    </div>
                                </p>
                                <p>
                                    <div>*课程名</div>
                                    <div>
                                        <input type="text" />
                                    </div>
                                </p>

                            </Modal>
                        </div>
                        <div className="handletab">
                                

                                
                               
                                <Table columns={columns} dataSource={arr} size="middle" rowKey={(record:any)=>record.id}/>
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    componentDidMount(){
        this.getData()
        
    }
    getData=async ()=>{
        const {room} = this.props.room;
        const result = await room();
        console.log(result.data);
        result.data.map((item:any,index:any)=>{
            item.id=index
        })
        this.setState({
            list:result.data
        })
    }

}
