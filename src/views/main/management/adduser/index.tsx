import * as React from "react";
import "./index.css";

import { inject, observer } from "mobx-react";
import { FormComponentProps } from "antd/lib/form";

// interface Props {
//   props: any;
//   adduser: any;
// }
interface Propsinfo extends FormComponentProps {
    props: any;
    adduser: any;
    form:any;
  }

@inject("adduser")
@observer

class Management extends React.Component<Propsinfo,any>{
  public render() {
    return (
      <div className="wrap">
        <h3>添加用户</h3>
        <div className="nav">
          <div className="box">
            <div className="tou">
              <span>添加用户</span>
              <span>更新用户</span>
            </div>
            <div className="con">
              <input />
              <input />
              <select id="sel">
                <option value="">管理者</option>
                <option value="">出题者</option>
                <option value="">浏览者</option>
              </select>
              <div className="btn">
                <button>确定</button>
                <button>重置</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="tou">
              <span>添加身份</span>
            </div>
            <div className="con">
              <input />

              <div className="btn">
                <button>确定</button>
                <button>重置</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="tou">
              <span>添加api接口权限</span>
            </div>
            <div className="con">
              <input />
              <input />
              <input />

              <div className="btn">
                <button>确定</button>
                <button>重置</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="tou">
              <span>添加视图接口权限</span>
            </div>
            <div className="con">
              <select id="sel">
                <option value="">登录</option>
                <option value="">主界面</option>
                <option value="">添加试题</option>
              </select>

              <div className="btn">
                <button>确定</button>
                <button>重置</button>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="tou">
              <span>给身份设置api接口权限</span>
            </div>
            <div className="con">
              <select id="sel">
                <option value="">管理者</option>
                <option value="">出题者</option>
                <option value="">浏览者</option>
              </select>
              <select id="sel">
                <option value="">获取所有的考试</option>
                <option value="">获取所有的课程</option>
                <option value="">删除指定的试题</option>
              </select>

              <div className="btn">
                <button>确定</button>
                <button>重置</button>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="tou">
              <span>给身份设置视图权限</span>
            </div>
            <div className="con">
              <select id="sel">
                <option value="">管理者</option>
                <option value="">出题者</option>
                <option value="">浏览者</option>
              </select>
              <select id="sel">
                <option value="">登录</option>
                <option value="">主界面</option>
                <option value="">添加试题</option>
              </select>

              <div className="btn">
                <button>确定</button>
                <button>重置</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

 public componentDidMount() {
    // this.getData();
  }

//   getData = async () => {
//     const result = await this.props.adduser.adduser();
//     console.log(result);
//     this.setState({
//       list: result
//     });
//   };
}

export default Management;
