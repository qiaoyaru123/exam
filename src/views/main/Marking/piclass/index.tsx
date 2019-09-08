import * as React from 'react';
import './index.css';
import { Table } from 'antd';

import {inject,observer} from 'mobx-react';




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
const data = [
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

interface Props{
    examlist:any
}

// @inject('examlist')
// @observer




export default class Piclass extends React.Component <Props>{
    render() {
        return (
            <div className="wrap">
                <h1>待批班级</h1>
                <div className="qwe">
                    <div>
                       
                        <Table columns={columns} dataSource={data} size="middle" />
                        
                    </div>,
                </div>
            </div>
        )
    }

    // componentDidMount(){
    //     this.getData();
    // }

    // getData=async ()=>{
    //     const {examlist} = this.props.examlist;
    //     const result = await examlist();
    //     console.log(result)
    //     this.setState({
    //         list:result
    //     })
    // }
}

// import * as React from 'react';




// export default class Index extends React.Component {
//     render() {
//         return (
//             <div>
//                 333
//             </div>
//         )
//     }
// }

