import * as React from "react";
import { Button, Form, Input, Layout, message, Breadcrumb } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { inject, observer } from "mobx-react";
import Editor from "for-editor";
import "./index.css";
const { Content } = Layout;

//引入组件
import Week from "../../../../component/week";
import Subjects from "../../../../component/subjects";
import GetType from "../../../../component/getQuestionsType";

interface UserFormProps extends FormComponentProps {
  selectvalue:any,
  user:any,
  question: any;
  age: number;
  history: any;
  location:any;
  name: string;
}

@inject("question","user","selectvalue")
@observer

class MessagePage extends React.Component<UserFormProps, any> {
  state = {
    data: [],
    questionsstem: "",
    questionsanswer: "",
    title: ""
  };
  public async componentDidMount(){
     let item= this.props.location.state.item;
     let params={
        params:{
          questions_id:item
        }
     }
     const result = await this.props.question.question(params);
     console.log(result.data)
     this.setState({
      questionsstem:result.data[0].title,
      title:result.data[0].questions_stem,
      questionsanswer:result.data[0].questions_answer
     })
     let obj={
       week:result.data[0].exam_name,
       type:result.data[0].questions_type_text,
       subject:result.data[0].subject_text
     }
    this.props.selectvalue.selectvalue(obj)
    }
  SetChange = (value: any) => {
    this.setState({
      title: value
    });
  };

  SetSolution = (solution: string) => {
    console.log(solution);
    this.setState({
      questionsanswer: solution
    });
  };

  AddItem = async (): Promise<any> => {
    const { title, questionsanswer, questionsstem } = this.state;
    let examid = null;
    let questionstypeid = null;
    let subjectid = null;
    if (
      window.sessionStorage.getItem("week") &&
      window.sessionStorage.getItem("type") &&
      window.sessionStorage.getItem("subject")
    ) {
      examid = window.sessionStorage.getItem("week");
      questionstypeid = window.sessionStorage.getItem("type");
      subjectid = window.sessionStorage.getItem("subject");
    }

    if (!questionsstem) {
      return message.info("请输入题干");
    } else if (!title) {
      return message.info("请输入题目主题");
    } else if (!examid) {
      return message.info("请选择考试类型");
    } else if (!subjectid) {
      return message.info("请选择课程类型");
    } else if (!questionstypeid) {
      return message.info("请选择题目类型");
    } else if (!questionsanswer) {
      return message.info("请输入答案信息");
    } else {
      const userinfo = await this.props.user.userInfo();
      let userid = userinfo.data.user_id;
      const result = await this.props.question.addquestion({
        questions_type_id: questionstypeid,
        questions_stem: questionsstem,
        subject_id: subjectid,
        exam_id: examid,
        user_id: userid,
        questions_answer: questionsanswer,
        title
      });
      message.info("添加成功");
    }
  };

  public render() {
    let { title, questionsanswer, questionsstem } = this.state;
    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0", fontSize: 20 }}>
          <Breadcrumb.Item>添加试卷</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: "#fff", minHeight: 530 }}>
          <div className="headers">
            <div className="m-header-title">题目信息</div>
            <div>题干</div>
            <div className="m-input-add">
              <Input
                placeholder="请输入题目标题,不超过20个字"
                value={questionsstem}
                onChange={e => {
                  if (e.target.value.length >= 20) {
                    message.info("请控制字数在20字以内");
                  } else {
                    this.setState({
                      questionsstem: e.target.value
                    });
                  }
                }}
              />
            </div>
          </div>
          <div className="m-con">
            题目主题
            <Editor
              placeholder="请输入内容..."
              value={title}
              onChange={this.SetChange}
            />
          </div>

          <div className="m-item-ip">
            <div>请选择考试类型:</div>
            <Week />
          </div>

          <div className="m-item-ip">
            <div>请选择课程类型:</div>
            <Subjects />
          </div>

          <div className="m-item-ip">
            <div>请选择题目类型:</div>
            <GetType />
          </div>
          <div className="m-con">
            答案信息
            <Editor
              placeholder="请输入内容..."
              value={questionsanswer}
              onChange={this.SetSolution}
            />
            <Button onClick={this.AddItem}>提交</Button>
          </div>
        </div>
      </Content>
    );
  }
}

export default Form.create()(MessagePage);
