
import * as React from 'react';
import { Form, Layout, Breadcrumb,  Tag, Table } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import "./index.css"

const { Content } = Layout;

//头部数据
const mycolumns = [
    [{
        title: '用户名',
        dataIndex: 'user_name',
        key: 'name',
    },
    {
        title: '密码',
        dataIndex: 'user_pwd',
        key: 'pwd',
    },
    {
        title: '身份',
        dataIndex: 'identity_text',
        key: 'identity_text',
    }], [
        {
            title: '身份名称',
            dataIndex: 'identity_text',
            key: 'name',
        }
    ], [
        {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
            key: 'name',
        },
        {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
            key: 'name',
        }, {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
            key: 'name',
        }
    ],
    [
        {
            title: '身份名称',
            dataIndex: 'identity_text',
            key: 'name',
        },
        {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
            key: 'name',
        }, {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
            key: 'name',
        }, {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
            key: 'name',
        }
    ], [
        {
            title: '视图权限名称',
            dataIndex: 'view_authority_text',
            key: 'view_authority_text',
        },
        {
            title: '视图id',
            dataIndex: 'view_id',
            key: 'view_id',
        }
    ], [
        {
            title: '身份',
            dataIndex: 'identity_text',
            key: 'identity_text',
        },
        {
            title: '视图名称',
            dataIndex: 'view_authority_text',
            key: 'view_authority_text',
        }, {
            title: '视图id',
            dataIndex: 'view_id',
            key: 'view_id',
        }
    ]
]

//头部数据
const datas = [{
    value: 0,
    title: "用户数据",
    url: "/user/user"
}, {
    value: 1,
    title: "身份数据",
    url: "/user/identity"
}, {
    value: 2,
    title: "api接口权限",
    url: "/user/api_authority"
}, {
    value: 3,
    title: "身份和api接口关系",
    url: "/user/identity_api_authority_relation"
}, {
    value: 4,
    title: "视图接口权限",
    url: "/user/view_authority"

}, {
    value: 5,
    title: "身份和视图权限关系",
    url: "/user/identity_view_authority_relation"
}]
interface UserFormProps extends FormComponentProps {
    usershow: any,
    age: number;
    history: any,
    name: string;
}
@inject('usershow')
@observer
class Showuser extends React.Component<UserFormProps, any> {
    state = {
        data: [],
        title: "",
        columns: []
    }

    public async userInfo($url: string, $tit: string, $index: number) {

        const result = await this.props.usershow.userShow($url);
        result.data.map((item: any, index: number) => {
            item.id = index
        })
        console.log(result.data)
        this.setState({ data: result.data, title: $tit, columns: mycolumns[$index] })

    }

    public async componentDidMount() {
        this.userInfo("/user/user", "用户数据", 0)
    }
    public render() {
        let { data, title, columns } = this.state;
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
                    <Breadcrumb.Item>用户展示</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 530 }}>
                    <div className="m-title-silt">
                        {datas.map((item, index) => {
                            return <Tag key={item.value} onClick={() => { this.userInfo(item.url, item.title, index) }}>{item.title}</Tag>
                        })}

                    </div>
                    <div className="m-tab">
                        <h2>{title}</h2>
                        <Table dataSource={data} columns={columns} rowKey={(record: any) => record.id} />;
                    </div>
                </div>
            </Content>
        )
    }
}


export default Form.create()(Showuser);








