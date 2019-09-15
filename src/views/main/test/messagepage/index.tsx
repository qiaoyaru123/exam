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
  selectvalue: any;
  user: any;
  question: any;
  age: number;
  history: any;
  location: any;
  name: string;
}

@inject("question", "user", "selectvalue")
@observer
class MessagePage extends React.Component<UserFormProps, any> {
  state = {
    data: [],
    questionsstem: "",
    questionsanswer: "",
    title: "",
    weekvalue: "",
    subjectvalue: "",
    typevalue: "",
    oldtitle: "",
    oldquestionsstem: "",
    oldquestionsanswer: ""
  };

  public async componentDidMount() {
    let item = this.props.location.state.item;
    let params = {
      params: {
        questions_id: item
      }
    };
    const result = await this.props.question.question(params);
    this.setState({
      questionsstem: result.data[0].title,
      title: result.data[0].questions_stem,
      questionsanswer: result.data[0].questions_answer,
      weekvalue: result.data[0].exam_name,
      typevalue: result.data[0].questions_type_text,
      subjectvalue: result.data[0].subject_text,
      oldtitle: result.data[0].questions_stem,
      oldquestionsstem:result.data[0].title,
      oldquestionsanswer: result.data[0].questions_answer
    });
  }
  
  SetChange = (value: any) => {
    this.setState({
      title: value
    });
  };

  SetSolution = (solution: string) => {
    this.setState({
      questionsanswer: solution
    });
  };

  AddItem = async (): Promise<any> => {
    const {
      title,
      questionsanswer,
      questionsstem,
      oldtitle,
      oldquestionsstem,
      oldquestionsanswer,
      weekvalue,
      typevalue,
      subjectvalue
    } = this.state;

    if (
      window.sessionStorage.getItem("week") &&
      window.sessionStorage.getItem("type") &&
      window.sessionStorage.getItem("subject")
    ) {
      let week = window.sessionStorage.getItem("week");
      let type = window.sessionStorage.getItem("type");
      let subject = window.sessionStorage.getItem("subject");
      if (
        title === oldtitle &&
        questionsanswer === oldquestionsanswer &&
        questionsstem === oldquestionsstem &&
        week === weekvalue &&
        type === typevalue &&
        subject === subjectvalue
      ) {
        message.info("你未做出任何修改");
      } else {
        let id = this.props.location.state.item;
        let params = {};
        if (week !== weekvalue) {
          //周考类型的改变
          params = {
            questions_id: id,
            title: questionsstem,
            questions_stem: title,
            questions_answer: questionsanswer,
            exam_id: week
          };
        } else if (type !== typevalue) {
            //试题类型改变
          params = {
            questions_id: id,
            title: questionsstem,
            questions_stem: title,
            questions_answer: questionsanswer,
            questions_type_id: type
          };
        } else if (subject !== subjectvalue) {
            //课程类型改变
          params = {
            questions_id: id,
            title: questionsstem,
            questions_stem: title,
            questions_answer: questionsanswer,
            questions_type_id: subject
          }; 
        } else if (type !== typevalue && week !== weekvalue) {
           //试题类型和所属的周考类型改变
          params = {
            questions_id: id,
            title: questionsstem,
            questions_stem: title,
            questions_answer: questionsanswer,
            questions_type_id: type,
            exam_id: week
          };
        } else if (type !== typevalue && subject !== subjectvalue) {
          //试题类型和所属的课程改变
          params = {
            questions_id: id,
            title: questionsstem,
            questions_stem: title,
            questions_answer: questionsanswer,
            subject_id: subject,
            questions_type_id: type
          };
        }else if(subject !== subjectvalue&&week !== weekvalue){
            //周考类型和所属的课程改变
            params = {
              questions_id: id,
              title: questionsstem,
              questions_stem: title,
              questions_answer: questionsanswer,
              subject_id: subject,
              exam_id: week
            };
        }else if(week === weekvalue&&subject === subjectvalue&&type === typevalue){
          params = {
            questions_id: id,
            title: questionsstem,
            questions_stem: title,
            questions_answer: questionsanswer,
          };
        }else{
          //所有类型的改变
          params = {
            questions_id: id,
            title: questionsstem,
            questions_stem: title,
            questions_answer: questionsanswer,
            subject_id: subject,
            exam_id: week,
            questions_type_id: type,
          };
        }
        const result = await this.props.question.setquestion(params);
        message.info(result.msg);
      }
    }
  };

  public render() {
    let {
      title,
      questionsanswer,
      questionsstem,
      weekvalue,
      subjectvalue,
      typevalue
    } = this.state;
    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0", fontSize: 20 }}>
          <Breadcrumb.Item>编辑试卷</Breadcrumb.Item>
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
            <Week val={weekvalue} />
          </div>

          <div className="m-item-ip">
            <div>请选择课程类型:</div>
            <Subjects val={subjectvalue} />
          </div>

          <div className="m-item-ip">
            <div>请选择题目类型:</div>
            <GetType val={typevalue} />
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
