// import * as React from 'react';
// import { Table } from 'antd';


// import { inject, observer } from 'mobx-react';
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//     },
// ];
// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//     },
// ];

// interface Props {
//     path: any
// }

// @inject('user')
// @observer
// class Rank extends React.Component<Props> {

//     public render() {
//         return (
//             <div>
//                 <Table columns={columns} dataSource={data} size="middle" />
//                 <h4>Small size table</h4>
//                 <Table columns={columns} dataSource={data} size="small" />
//             </div>
//         )
//     }
// }

// export default  Rank;