
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

class QuestionsType extends React.Component<UserFormProps, any> {

    state = {
        data: [],
    }

    SelectChanges = (value: any) => {
        window.sessionStorage.setItem("type", value)
    }

    public async componentDidMount() {
        window.sessionStorage.removeItem("type");
        const result = await this.props.select.getQuestionsType();
        this.setState({ data: result.data })
    }

    public render() {
        let { data } = this.state;
        return (<Select defaultValue="" style={{ width: 200 }} onChange={this.SelectChanges}>
            {data.map((item: any) => <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
            )}
        </Select>
        )
    }
}

export default Form.create()(QuestionsType);


