import * as React from 'react';
import { Modal, Button } from 'antd';
import './index.css';
import { Table } from 'antd';
import { observer, inject } from 'mobx-react';
import { Input } from 'antd';
import { Select } from 'antd';

const { Option } = Select;

const columns = [
    {
        title: '班级名',
        dataIndex: 'grade_name',
    },
    {
        title: '课程名',
        dataIndex: 'subject_text',
    },
    {
        title: '教室号',
        dataIndex: 'room_text',
    }, {
        title: '操作',
        dataIndex: 'btn',
    }
];

let arr: any = [];

function onChange(value:any) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val:any) {
    console.log('search:', val);
}

interface Props {
    student: any,
    grade_name: any,
    arr: any,
    banroom: any,
    addclass: any,
    clickRow: any,
    num: any,
    delclass: any,
    roomall: any,
    map: any,
    xueall: any
}

@inject('student', 'addclass', 'delclass', 'roomall', 'xueall')
@observer

export default class Classbuild extends React.Component<Props>{
    state = {
        visible: false,
        list: [],
        banroom: '',
        jiaoroom: '',
        classicon: '',
        roomall: [],
        xueall: [],
        
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
        const { visible, list, banroom, jiaoroom, classicon, roomall, xueall } = this.state;

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
                                onCancel={this.handleCancel}
                                footer={[
                                    <Button key="back" onClick={this.handleCancel}>
                                        取消
                                 </Button>,
                                    <Button key="bac" onClick={this.handleok}>
                                        提交
                                </Button>,
                                ]}
                            >
                                <p>
                                    <div>*班级名</div>
                                    <div>

                                        <Input size="large" placeholder="" onChange={this.handleadd} value={banroom} name="banroom" className='ipt' />
                                    </div>
                                </p>
                                <p>
                                    <div>*教室号</div>
                                    <div>
                                        
                                        <Select   
                                                defaultValue=""
                                                style={{ width: 200 }}
                                                onChange={this.handletwo}   
                                            >
                                            {
                                                roomall.map((item: any, index: any) => {
                                                    return <Option value={item.room_id} key={index}>{item.room_text}</Option>
                                                })
                                            }
                                            </Select>    
                                    </div>
                                </p>
                                <p>
                                    <div>*课程名</div>
                                    <div>
                                       
                                            <Select
                                                defaultValue=""
                                                style={{ width: 200 }}
                                                onChange={this.handlethree}
                                            >
                                            {
                                                xueall.map((item: any, index: any) => {
                                                    return <Option value={item.subject_id} key={index}>{item.subject_text}</Option>
                                                })
                                            }
                                            </Select> 
                                    </div>
                                </p>

                            </Modal>
                        </div>
                        <div className="handletab">
                            <Table columns={columns} dataSource={list} size="middle" 
                            rowKey={(record: any) => {
                                return record.id
                            }} 
                            onRow={this.onClickRow}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getData();
        this.getroomall();
        this.getxueall();
    }

    handlethree=async(e:any)=>{
        console.log(e);
        this.setState({
            classicon:e
        })
    }

    handletwo = async(e:any)=>{
       
        this.setState({
            jiaoroom:e
        })
    }

    onClickRow = (record: any) => {
        return {
            onClick: () => {
                let del = record.grade_id;
                console.log(del)
                this.handledel(del)
            }
        }
    }

    handledel = async (del: any) => {
        let { delclass } = this.props.delclass;
        const result = await delclass({ grade_id: del });
    }

    handleadd = async (e: any) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    handleok = async () => {
        let { banroom, jiaoroom, classicon } = this.state;
        let obj = {
            grade_name: banroom,
            room_id: jiaoroom,
            subject_id: classicon
        };
        console.log(obj)
        this.addclass(obj);
        this.setState({
            visible: false,
        });
    }

    addclass = async (obj: any) => {
        const { addclass } = this.props.addclass;
        const result = await addclass(obj);
    }

    getroomall = async () => {
        const { roomall } = this.props.roomall;
        const result = await roomall();
        this.setState({
            roomall: result.data
        })
    }

    getxueall = async () => {
        const { xueall } = this.props.xueall;
        const result = await xueall();
        console.log(result.data);
        this.setState({
            xueall: result.data
        })
    }

    getData = async () => {
        const { student } = this.props.student;
        const result = await student();
        console.log(result.data);
        result.data.map((item: any, index: any) => {
            item.id = index + '',
                item.btn = '修改|删除'
        })
        if (result.code === 1) {
            this.setState({
                list: result.data
            })
        }
    }
}
