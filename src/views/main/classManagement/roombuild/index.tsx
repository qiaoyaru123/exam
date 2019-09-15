import * as React from 'react';
import { Modal, Button } from 'antd';
import './index.css';
import { Table } from 'antd';
import {observer, inject} from 'mobx-react';
import { Input } from 'antd';

const columns = [
    {
        title: '教室号',
        dataIndex: 'room_text',
    },
    {
        title: '操作',
        dataIndex: 'done',
    } 
];



interface Props{
    room:any,
    result:any,
    arr:any,
    addroom:any,
    delroom:any
}


@inject('room','addroom','delroom')
@observer

export default class Classbuild extends React.Component<Props> {
    state = {
        loading: false,
        visible: false,
        list:[],
        bname:'',
        jiaoname:'',
        iconname:''
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading,list ,bname,jiaoname,iconname} = this.state;
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
                                title="添加班级"
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                        取消
                                 </Button>,
                                    <Button key="submit" type="primary" 
                                    loading={loading} 
                                    onClick={this.handleok}
                                    >
                                        提交
                             </Button>,
                                ]}
                            >
                                <p>
                                    <div>*教室号</div>
                                    <div>
                                        <Input size="large" placeholder="" 
                                        onChange={this.handlejia} 
                                        value={bname} name="bname" className='ipt' />
                                    </div>
                                </p>
                            </Modal>
                        </div>
                        <div className="handletab">
                            <Table columns={columns} dataSource={list} size="middle" 
                                rowKey={(record:any)=>{
                                    return  record.id
                                 }} 
                                onRow={this.onClickRow} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getData();  
    }

    onClickRow =(record:any)=>{
        return {
            onClick:()=>{
                let del = record.room_id;
                console.log(del)
                this.handledel(del)
            }
        }
    }

    handledel = async(del:any)=>{
        console.log(del)
        const {delroom} = this.props.delroom;
        const result = await delroom({room_id:del});
    }

    handlejia=(e:any)=>{
        console.log(e.target.value)
        let name= e.target.name;
        this.setState({
            [name]:e.target.value
        })
        
    }

    handleok=()=>{
        let {bname} = this.state;
        this.addroom(bname);
        this.setState({
            visible: false,
        });
    }

    addroom= async(obj:any)=>{
        const {addroom} = this.props.addroom;
        const result = await addroom({room_text:obj});

    }


    getData=async ()=>{
        const {room} = this.props.room;
        const result = await room();
        console.log(result.data);
        result.data.map((item:any,index:any)=>{
            item.id=index+'',
            item.done='删除'
        })
        this.setState({
            list:result.data
        })
    }

}
