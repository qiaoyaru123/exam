
import * as React from 'react';
import { Form, Select, } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';

const { Option } = Select;

interface UserFormProps extends FormComponentProps {
    select: any,
    age: number;
    history: any,
    name: string;
}

@inject('select')
@observer

class Week extends React.Component<UserFormProps, any> {
    state = {
        data: []
    }
    SelectChanges = (value: any) => {
        // this.setState({
        //    val:value
        // })
        window.sessionStorage.setItem("week", value)
    }
    public async componentDidMount() {
        const result = await this.props.select.week();
        this.setState({ data: result.data })
    }
    public render() {
        let { data } = this.state;
        return (<Select defaultValue="" style={{ width: 200 }} onChange={this.SelectChanges}>
            {data.map((item: any) => <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
            )}
        </Select>

        )
    }
}

export default Form.create()(Week);


