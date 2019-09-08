import * as React from 'react';
import { Modal, Button } from 'antd';
import './index.css';
import { Table } from 'antd';


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        
    },
];

export default class Classbuild extends React.Component {
    state = {
        loading: false,
        visible: false,
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
        const { visible, loading } = this.state;

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
                                

                                
                               
                                <Table columns={columns} dataSource={data} size="middle" />
                                
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
