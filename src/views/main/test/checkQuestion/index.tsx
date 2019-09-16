import { Button, Form, Icon, Input, Layout, Select, List, Avatar, Breadcrumb } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import "./index.css"

//引入组件
import Week from "../../../../component/week"
import Type from "../../../../component/getQuestionsType"

interface UserFormProps extends FormComponentProps {
  history: any;
  location: any;
  question: any;
  age: number;

  name: string;
  state: any;
}

const { Content } = Layout;

@inject("question")
@observer

class Checkfile extends React.Component<UserFormProps, any> {
  public state = {
    datas: [],
    title: [],
    ind: -1,
    id: ""
  };

  async componentDidMount() {
    const title = await this.props.question.examsubject();
    this.getData({ params: {} });
    this.setState({ title: title.data });
  }

  //获取下标和id
  searchData = ($id: string, $index: number) => {
    this.setState({ ind: $index, id: $id });
  };

  //请求事件
  queryData = () => {
    let { id } = this.state;
    let week = null;
    let type = null;
    let params = {};
    if (
      id &&
      window.sessionStorage.getItem("week") &&
      window.sessionStorage.getItem("type")
    ) {
      week = window.sessionStorage.getItem("week");
      type = window.sessionStorage.getItem("type");
      params = {
        params: {
          subject_id: id,
          exam_id: week,
          questions_type_id: type
        }
      };
    } else if (id && window.sessionStorage.getItem("week")) {
      week = window.sessionStorage.getItem("week");
      params = {
        params: {
          subject_id: id,
          exam_id: week
        }
      };
    } else if (id && window.sessionStorage.getItem("type")) {
      type = window.sessionStorage.getItem("type");
      params = {
        params: {
          subject_id: id,
          questions_type_id: type
        }
      };
    } else if (
      window.sessionStorage.getItem("type") &&
      window.sessionStorage.getItem("week")
    ) {
      week = window.sessionStorage.getItem("week");
      type = window.sessionStorage.getItem("type");
      params = {
        params: {
          exam_id: week,
          questions_type_id: type
        }
      };
    } else if (id) {
      params = {
        params: {
          subject_id: id
        }
      };
    } else if (window.sessionStorage.getItem("week")) {
      week = window.sessionStorage.getItem("week");
      params = {
        params: {
          exam_id: week
        }
      };
    } else if (window.sessionStorage.getItem("type")) {
      type = window.sessionStorage.getItem("type");
      params = {
        params: {
          questions_type_id: type
        }
      };
    }
    this.getData(params);
  };

  //详情页
  detailPage=($id:any)=>{
      this.props.history.push({pathname:"/main/test/Detailpage",state:{item:$id}})
  }

  //编辑页
  detailMessage($item:any){
      this.props.history.push({pathname:"/main/test/Messagepage",state:{item:$item}})
  } 
   
  getData = async (params: any) => {
    const result = await this.props.question.question(params);
    this.setState({ datas: result.data });
  };

  channel=(e:any)=>{
   console.log(123)
  }
  derive=()=>{
   console.log(456)
  }

  

  public render() {
    
    let { datas, title, ind } = this.state;
    return (
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0", fontSize: 20 }}>
          <Breadcrumb.Item>查看试题</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            background: "#fff",
            minHeight: 530,
            height: "auto"
          }}
          className="m-max"
        >
          <div className="header">
            <div className="m-title">
              课程类型:
              <span
                className={ind === -1 ? "action" : ""}
                onClick={() => {
                  this.searchData("", -1);
                }}
              >
                All
              </span>
              {title.map((item: any, index: any) => (
                <span
                  key={item.subject_id}
                  className={ind === index ? "action" : ""}
                  onClick={() => {
                    this.searchData(item.subject_id, index);
                  }}
                >
                  {item.subject_text}
                </span>
              ))}
            </div>
            <div className="m-input-search">
              <span className="m-search-week">
                考试类型:
                <Week />
              </span>
              <span className="m-search-type">
                题目类型:
                <Type />
              </span>
              <span>
                <Button onClick={this.queryData}>
                  <Icon type="search" />
                  查询
                </Button>
              </span>
              <span>
                <Button onClick={this.channel}>
                  导出
                </Button>
              </span>
              <span>
                <Button onClick={this.derive}>
                  导入
                </Button>
              </span>
            </div>
            <List
              itemLayout="horizontal"
              dataSource={datas}
              renderItem={(item: any) => (
                <List.Item>
                  <div className="m-item" onClick={()=>{this.detailPage(item.questions_id)}}>
                    <span>{item.title}</span>
                    <span>
                      <Button>{item.questions_type_text}</Button>
                      <Button>{item.subject_text}</Button>
                      <Button className="m-btn-col">{item.exam_name}</Button>
                    </span>
                    <span>{item.subject_text}</span>
                  </div>
                  <div className="m-btns" onClick={()=>{this.detailMessage(item.questions_id)}}>编辑</div>
                </List.Item>
              )}
            />
          </div>
        </div>
      </Content>
    );
  }
}

export default Form.create()(Checkfile);
