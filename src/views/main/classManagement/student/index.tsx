import { Button, Form, Icon, Input, Layout, Select, Breadcrumb, Table } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import "./index.css"
const { Option } = Select;
const { Content } = Layout;
interface UserFormProps extends FormComponentProps {
  question: any,
  age: number;
  history: any,
  name: string;
  
}
function handleChange(value: any) {
  console.log(`selected ${value}`);
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    width: '20%',
  },
];


@inject('question')
@observer
class Student extends React.Component<UserFormProps, any> {
  state = {
    data: [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }],
    value: "",
    pagination: {},
    loading: false,
  }
  public async componentDidMount() {
    const result = await this.props.question.question();

    this.setState({ data: result.data })
  }
  handleChanges(value: any) {
    this.setState({
      value
    })
  }
  handleTableChange = (pagination:any, filters:any, sorter:any) => {
        console.log(pagination, filters,sorter)
  };
  public render() {
    let { data, value } = this.state;
    // const {getFieldProps} = this.props.form
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
          <Breadcrumb.Item>学生管理</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 530 }}>
          <div className="m-header-student">
            <Input placeholder="输入学生姓名..." />
            <Select value="" style={{ width: 200, marginLeft: 30 }} onChange={() => { this.handleChanges(value) }}>

              <Option value="javaScript上">javaScript上</Option>
              <Option value="javaScript下">javaScript下</Option>
              <Option value="模块化开发">模块化开发</Option>
              <Option value="移动端开发">移动端开发</Option>
              <Option value="node基础">node基础</Option>
              <Option value="组件化开发(vue)">组件化开发(vue)</Option>
              <Option value="渐进式开发(react)">渐进式开发(react)</Option>
              <Option value="项目实战">项目实战</Option>
              <Option value="javaScript高级">javaScript高级</Option>
              <Option value="node高级">node高级</Option>

            </Select>
            <Select value="" style={{ width: 200, margin: "0 30px" }} onChange={() => { this.handleChanges(value) }}>

              <Option value="javaScript上">javaScript上</Option>
              <Option value="javaScript下">javaScript下</Option>
              <Option value="模块化开发">模块化开发</Option>
              <Option value="移动端开发">移动端开发</Option>
              <Option value="node基础">node基础</Option>
              <Option value="组件化开发(vue)">组件化开发(vue)</Option>
              <Option value="渐进式开发(react)">渐进式开发(react)</Option>
              <Option value="项目实战">项目实战</Option>
              <Option value="javaScript高级">javaScript高级</Option>
              <Option value="node高级">node高级</Option>

            </Select>
            <Button>搜索</Button>
            <Button>重置</Button>
          </div>
          <div className="m-item-stud">
            <Table
              columns={columns}
              rowKey={record => record.key}
              dataSource={this.state.data}
              pagination={this.state.pagination}
              loading={this.state.loading}
              onChange={this.handleTableChange}
            />
          </div>
        </div>
      </Content>
    )
  }
}


export default Form.create()(Student);