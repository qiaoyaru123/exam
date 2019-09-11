import * as React from "react";
import { Form, Select } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { inject, observer } from "mobx-react";

const { Option } = Select;

interface UserFormProps extends FormComponentProps {
  selectvalue: any,
  select: any,
  age: number,
  history: any,
  name: string,
  week: string
}

@inject("select", "selectvalue")
@observer
class Week extends React.Component<any, any> {
  state = {
    data: [],
    value: ""
  };
  SelectChanges = (value: any) => {
    this.setState({ value });
    window.sessionStorage.setItem("week", value);
  };
  public async componentDidMount() {
    window.sessionStorage.removeItem("week");
    const result = await this.props.select.week();
    this.setState({ data: result.data});
  }
  public componentWillReceiveProps(nextProps:any){
       this.setState({value:nextProps.val})  
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
          <Option value={item.exam_id} key={item.exam_id}>
            {item.exam_name}
          </Option>
        ))}
      </Select>
    );
  }
}

export default Form.create<any>()(Week);
