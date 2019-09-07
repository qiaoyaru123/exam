import * as React from 'react';
import Confirm from '../../../../component/confirm/comfirm';
import './index.css';
// import Tab from '../../../../component/table/table';

import { Table } from 'antd';
// import "./index.css";

import { inject, observer } from 'mobx-react';







interface PropsInfo {
    Tab: any,
    path: any
}




const columns = [
    {
        title: '类型ID',
        dataIndex: 'name',
    },
    {
        title: '类型名称',
        dataIndex: 'age',
    },
    {
        title: '操作',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: '774318-730z8m',
        age: '简答题',
        address: '',
    },
    {
        key: '2',
        name: 'br9d6s-wh46i',
        age: '代码阅读题',
        address: '',
    },
    {
        key: '3',
        name: 'fwfit-wla1q',
        age: '代码补全',
        address: '',
    },
    {
        key: '4',
        name: 'n66k4n-i9zpen',
        age: '修改bug',
        address: '',
    },
    {
        key: '5',
        name: 'w8i73-r8oai',
        age: '手写代码',
        address: '',
    }
];

@inject('user')
@observer

class Testlist extends React.Component<PropsInfo> {
    public render() {
        return (
            <div className="test">
                <h3>试题分类</h3>
                <div className="dem">
                    <div className="dom">
                        <Confirm />
                    </div>
                    <div className="tab">
                        {/* <Tab/> */}
                       <div>
                            <Table columns={columns} dataSource={data} size="middle" />
                            {/* <h4>Small size table</h4>
                            <Table columns={columns} dataSource={data} size="small" /> */}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Testlist;