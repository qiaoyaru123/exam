
import * as React from 'react';
import { Button, Form, Icon, Input, Tag, Layout, Select, List, Avatar, Breadcrumb } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import "./index.css"
import { Table } from 'antd';


const { Option } = Select;
const { Content } = Layout;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const dataer = [
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

const datas = [{
    value: 0,
    title: "用户数据"
}, {
    value: 1,
    title: "身份数据"
}, {
    value: 2,
    title: "api接口权限"
}, {
    value: 3,
    title: "身份和api接口关系"
}, {
    value: 4,
    title: "身份和api接口关系"
}, {
    value: 5,
    title: "视图接口权限"
}, {
    value: 6,
    title: "身份和视图权限关系"
}]
interface UserFormProps extends FormComponentProps {
    question: any,
    age: number;
    history: any,
    name: string;
}
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
@inject('question')
@observer
class Showuser extends React.Component<UserFormProps, any> {
    state = {
        data: [],
        searchText: ''
    }



    handleChanges(value: any) {
        this.setState({
            value
        })
    }
    public async componentDidMount() {
        // const result = await this.props.question.getCheckfile();
        // this.setState({ data: result.data })
    }
    public render() {
        let { data } = this.state;
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
                    <Breadcrumb.Item>用户展示</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 530 }}>
                    <div className="m-title-silt">
                        {datas.map((item, index) => {
                            return <Tag key={item.value}>{item.title}</Tag>
                        })}

                    </div>

                    <div className="nav">
                        <div className="tab">
                                <h2>用户数据</h2>
                                <Table columns={columns} dataSource={dataer} size="middle" />
                        </div>

                    </div>
                </div>
            </Content>
        )
    }
}


export default Form.create()(Showuser);








