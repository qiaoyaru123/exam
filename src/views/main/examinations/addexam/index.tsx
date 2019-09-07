import * as React from 'react';
import { Button, Form, Icon, Input, Layout, Select, Tag, Avatar, Breadcrumb  } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';

import "./index.css"

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
class Addexam extends React.Component<UserFormProps, any> {
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
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
                    <Breadcrumb.Item>试卷列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 530 }}>
                  Addexam
                </div>

            </Content>
        )
    }
}


export default Form.create()(Addexam);
