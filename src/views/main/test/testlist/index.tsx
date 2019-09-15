import * as React from 'react';
import './index.css';
import { Table } from 'antd';
import { Modal, Button,Input  } from 'antd';
import { inject, observer } from 'mobx-react';

interface PropsInfo {
    Tab: any,
    path: any,
    id:any,
    examall:any,
    loading:any,
    visible:any,
    typename:any,
    done:any,
    arr:any,
    typeadd:any
}

const columns = [
    {
        title: '类型ID',
        dataIndex: 'questions_type_id',
    },
    {
        title: '类型名称',
        dataIndex: 'questions_type_text',
    },
    {
        title: '操作',
        dataIndex: 'zuo',
    }
];



@inject('examall')
@observer

class Testlist extends React.Component<PropsInfo> {
    state={
        loading: false,
        visible: false,
        list:[],
        tyname:''
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    public render() {
        const {visible,list,tyname} = this.state;
        return (
            <div className="wrapper">
            <h1>试题分类</h1>
            <div className="icon">
                <div className="box">
                    <div className="handletian">
                        <Button type="primary" onClick={this.showModal}>
                            +添加类型
                         </Button>
                        <Modal
                            visible={visible}
                            title="创建新类型"
                            onCancel={this.handleCancel}
                            footer={[
                                <Button key="back" onClick={this.handleCancel}>
                                    取消
                             </Button>,
                                <Button key="back" onClick={this.handleok}>
                                    提交
                         </Button>,
                            ]}
                        >
                            <p>
                                {/* <input type="text" placeholder="请输入试题类型" onChange={this.handletype} value={tyname} name="tyname"/> */}
                                <Input size="large" placeholder="请输入试题类型" onChange={this.handletype} value={tyname} name="tyname"/>
                            </p>
                        </Modal>
                    </div>
                    <div className="handletaber">
                            <Table columns={columns} dataSource={list} size="middle" 
                            rowKey={(record:any)=>{
                                return record.id
                            }}
                            />
                    </div>
                </div>
            </div>
        </div>
        )
    }


    componentDidMount(){
        this.getdata();
    }

    handletype = (e:any) =>{
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }

    handleok = () =>{
        let {tyname}  = this.state;
        console.log(JSON.stringify(tyname));
        this.typeadd(JSON.stringify(tyname));
        this.setState({ visible: false });
    }

    typeadd =async(obj:string)=>{
        console.log(obj)
        const {typeadd} = this.props.examall;
        console.log(typeadd);
        const result = await typeadd({text:obj,sort:'1'});
        console.log(result);
    }

    getdata = async() =>{
        const {examall} = this.props.examall;
        const result = await examall();
        console.log(result)
        result.map((item:any,index:any)=>{
            item.id=index+'',
            item.zuo=''
        })
        this.setState({
            list:result
        })
        }
    }

export default Testlist