import * as React from "react";
import { Form, Select } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { inject, observer } from "mobx-react";

const { Option } = Select;

interface UserFormProps extends FormComponentProps {
  select: any;
  age: number;
  history: any;
  name: string;
}

@inject("select")
@observer
class Subjects extends React.Component<UserFormProps, any> {
  state = {
    data: [],
    value: ""
  };

  SelectChanges = (value: any) => {
    window.sessionStorage.setItem("subject", value);
  };

  public async componentDidMount() {
    window.sessionStorage.removeItem("subject");
    const result = await this.props.select.subjects();
    this.setState({ data: result.data });
  }

  public componentWillReceiveProps(nextProps: any) {
    this.setState({ value: nextProps.val });
  }

  public render() {
    let { data, value } = this.state;
    return (
      <Select
        value={value}
        style={{ width: 200 }}
        onChange={this.SelectChanges}
      >
        {data.map((item: any) => (
          <Option value={item.subject_id} key={item.subject_id}>
            {item.subject_text}
          </Option>
        ))}
      </Select>
    );
  }
}

export default Form.create<any>()(Subjects);
