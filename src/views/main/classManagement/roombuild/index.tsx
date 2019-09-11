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
    } 
];

let arr:any=[];

interface Props{
    room:any,
    result:any,
    arr:any,
    addroom:any 
}


@inject('room','addroom')
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
        const { visible, loading,list ,bname,jiaoname,iconname} = this.state;
        {
            list.map((item:any,index:number)=>{
                   arr=[{
                    holl:item.room_text,
                    action:'删除',
                    id:index+'',
                    grade_id:item.grade_id 

                }]
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
                                title="添加班级"
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
                                    <div>*教室号</div>
                                    <div>
                                        <input type="text" onChange={this.handlejia} name="bname" value={bname}/>
                                    </div>
                                </p>
                               

                            </Modal>
                        </div>
                        <div className="handletab">
                            <Table columns={columns} dataSource={arr} size="middle" 
                                rowKey={(record:any)=>{
                                    return  record.id
                                }} onRow={this.onClickRow} 
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
                let del = record.grade_id;
                console.log(del)
                // this.deljian(del);
            }
        }
    }

    handlejia=(e:any)=>{
       // console.log(e.target.value)
        let name= e.target.name;
        this.setState({
            [name]:e.target.value
        })
        
    }

    handleok=()=>{
        let {bname,jiaoname,iconname} = this.state;
        console.log(bname,jiaoname,iconname);

        let obj={
            holl:jiaoname,
            action:'删除'
        }

        arr.push(obj);

        this.addroom(obj);
    }

    addroom= async(obj:any)=>{
        const {addroom} = this.props.addroom;
        const result = await addroom(obj);
    }


    getData=async ()=>{
        const {room} = this.props.room;
        const result = await room();
        console.log(result.data);
        result.data.map((item:any,index:any)=>{
            item.id=index+''
        })
        this.setState({
            list:result.data
        })
    }

}
