import * as React from 'react';
import './index.css';
import { Table } from 'antd';
import { Modal, Button } from 'antd';

import { inject, observer } from 'mobx-react';

<<<<<<< HEAD
// interface PropsInfo {
//     Tab: any,
//     path: any
// }
=======
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
>>>>>>> 714bbfaa7741bbbecba312deff57b044e0323371

const columns = [
    {
        title: '类型ID',
        dataIndex: 'typeid',
    },
    {
        title: '类型名称',
        dataIndex: 'tname',
    },
    {
        title: '操作',
        dataIndex: 'zuo',
    },
];

const arr:any=[];

@inject('examall')
@observer

<<<<<<< HEAD
class Testlist extends React.Component {
=======
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

    // handleOk = () => {
    //     this.setState({ loading: true });
    //     setTimeout(() => {
    //         this.setState({ loading: false, visible: false });
    //     }, 3000);
    // };

    handleCancel = () => {
        this.setState({ visible: false });
    };

>>>>>>> 714bbfaa7741bbbecba312deff57b044e0323371
    public render() {
       
        const {loading,visible,list,tyname} = this.state;

        {
            list.map((item:any,index:any)=>{
                return arr.push({
                    typeid:item.questions_type_id,
                    tname:item.questions_type_text,
                    zuo:'',
                    id:item.id
                })
            })
        }

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
                                <input type="text" placeholder="请输入试题类型" onChange={this.handletype} value={tyname} name="tyname"/>
                            </p>
                        </Modal>
                    </div>
                    <div className="handletaber">
                            <Table columns={columns} dataSource={arr} size="middle" 
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
        console.log(tyname);
        let obj={
            typeid:tyname,
            zuo:'',
            
        }
        arr.push(obj);
        this.typeadd(obj);
        this.setState({ visible: false });
    }

    typeadd =async(obj:any)=>{
        const {typeadd} = this.props.examall;
        console.log(typeadd);
        const result = await typeadd(obj);
        console.log(result);
    }

    getdata = async() =>{
        const {examall} = this.props.examall;
        const result = await examall();
        console.log(result)
        result.map((item:any,index:any)=>{
            item.id=index+''
        })
        this.setState({
            list:result
        })
        }
    }

export default Testlist