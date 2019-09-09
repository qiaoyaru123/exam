

import * as React from 'react';
import {  Form,  Select,} from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';

const { Option } = Select;

interface UserFormProps extends FormComponentProps {
    select: any,
    age: number;
    history: any,
    name: string;
}
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
@inject('select')
@observer
class QuestionsType extends React.Component<UserFormProps, any> {
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

        const result = await this.props.select.subjects();
        console.log(result)
        this.setState({ data: result.data })
    }
    public render() {
        let { data, value } = this.state;
        return (<Select defaultValue="" style={{ width: 200 }} onChange={() => { this.handleChanges(value) }}>
            {data.map((item:any)=><Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>
        )}
        </Select>
        )
    }
}

export default Form.create()(QuestionsType);


