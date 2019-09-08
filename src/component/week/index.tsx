
import * as React from 'react';
import { Button, Form, Icon, Input, Layout, Select, Tag, Avatar, Breadcrumb, List, Typography, Divider } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';


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
// @inject('question')
// @observer
class Week extends React.Component<UserFormProps, any> {
    state = {
        data: [],
        value: '',
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
        let { data, value } = this.state;
        return (<Select defaultValue="" style={{ width: 200 }} onChange={() => { this.handleChanges(value) }}>
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

        )
    }
}


export default Form.create()(Week);


