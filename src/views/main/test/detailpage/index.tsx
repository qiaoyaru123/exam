import {
  Form,
  Layout,
  Breadcrumb
} from "antd";
import { FormComponentProps } from "antd/lib/form";
import * as React from "react";
import { inject, observer } from "mobx-react";
import "./index.css";

interface UserFormProps extends FormComponentProps {
  history: any;
  location: any;
  question: any;
  name: string;
  state: any;
}

const { Content } = Layout;

@inject("question")
@observer
class Checkfile extends React.Component<UserFormProps, any> {
  public state = {
    datas: []
  };

  public async componentDidMount() {
    let item = this.props.location.state.item;
    let params = {
      params: {
        questions_id: item
      }
    };
    const result = await this.props.question.question(params);
    this.setState({datas:result.data})
  }

  public render() {
    let { datas } = this.state;
    console.log(datas)
    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0", fontSize: 20 }}>
          <Breadcrumb.Item>试题详情</Breadcrumb.Item>
        </Breadcrumb>
         {
             datas.map((item:any)=>{
                 return  <div
                 style={{
                   padding: 24,
                   minHeight: 530,
                   height: "auto"
                 }}
                 className="m-max"
                 key={item.exam_id}
               >
                 <div className="m-left-box">
                   <div>出题人:{item.user_name}</div>
                   <span className="m-title-bar">题目信息</span>
                   <div className="m-title-mes">
                     <span>{item.questions_type_text}</span>
                     <span>{item.subject_text}</span>
                     <span className="m-item-col">{item.exam_name}</span>
                   </div>
                   <div className="m-title-item">
                     {item.title}
                     <span className="m-expression">
                        {item.questions_stem}
                     </span>
                   </div>
                   <div>
                     补全以下代码完成洗牌逻辑
                     <div className="m-topic">{item.questions_answer}</div>
                     补全以下逻辑完成发牌操作（打乱的54张牌均分为三分）：
                     <div className="m-topic-gap"></div>
                   </div>
                 </div>
                 <div className="m-right-box">
                   <span className="m-title-bar">答案信息</span>
                   <div>// 遍历 pokers 数组</div>
                   <div className="m-method">123</div>
                   <span>发牌</span>
                   <div className="m-item-expression">425</div>
                 </div>
               </div>
             })
         }
       
      </Content>
    );
  }
}

export default Form.create()(Checkfile);
