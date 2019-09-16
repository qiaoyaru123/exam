import * as React from "react";
import {
  Menu,
  Dropdown,
  Input,
  Icon,
  Divider,
  Form,
  Modal,
  Upload,
  message,
  Layout,
  Select
} from "antd";

import { inject, observer } from "mobx-react";
interface PropsInfo {
  user: any;
  abc?: string;
  form?: any;
}
const { Header } = Layout;
const { Option } = Select;
@inject("user")
@observer
class Headers extends React.Component<PropsInfo, any> {
  state = {
    visible: false,
    loading: false,
    username: "",
    password: "",
    userid: ""
  };

  public async componentDidMount() {
    const userInfo = await this.props.user.userInfo();
    const userpwd = window.localStorage.getItem("account");
    if (userpwd) {
      let pwd = JSON.parse(userpwd);
      this.setState({
        username: userInfo.data.user_name,
        userid: userInfo.data.user_id,
        password: pwd.user_pwd
      });
    }
  }

  handleChange = (info: any) => {
    console.log("info....", info);
    if (info.file.status === "done") {
      // 上传成功
      this.props.user.changeAvatar(info.file.response.data[0].path);
    } else if (info.file.status === "uploading") {
      // 做上传进度条
      console.log("percent....", info.file.percent);
    }
  };

  handleOk = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { username, password, userid } = this.state;
    let { avatar } = this.props.user;
    let val = {
      user_id: userid,
      user_name: username,
      avatar
    };
    const { code, msg } = await this.props.user.updateUserInfo(val);
    if (code === 1) {
      message.success("更新用户信息成功");
      this.setState({
        visible: false
      });
    } else {
      message.error(msg);
    }
  };
  beforeUpload(): boolean {
    return true;
  }
  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  setUser = (e: any) => {
    if (e.target.name === "name") {
      this.setState({ username: e.target.value });
    } else if (e.target.name === "pwd") {
      this.setState({ password: e.target.value });
    }
  };

  onChange=(value:string)=>{
    console.log(value)
  }
  public render() {
    let { username, password } = this.state;
    const menus = (
      <Menu>
        <Menu.Item onClick={() => this.setState({ visible: true })}>
          个人中心
        </Menu.Item>
        <Menu.Item>我的班级</Menu.Item>
        <Menu.Item>
          <Divider />
        </Menu.Item>
        <Menu.Item>设置</Menu.Item>
        <Menu.Item>退出登录</Menu.Item>
      </Menu>
    );
    const formItemLayout = {
      labelCol: { span: 4, offset: 4 },
      wrapperCol: { span: 12 }
    };
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { getFieldDecorator } = this.props.form;
    let { avatar, info } = this.props.user;
    return (
      <Header className="title">
        <span className="m-header-img">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
            alt=""
          />
        </span>

        <span className="m-header-long">
          请选择语言:
          <Select
            style={{ width:100 }}
            placeholder="中文"
            onChange={this.onChange}
          >
            <Option value="CN">中文</Option>
            <Option value="US">English</Option>
          </Select>
        </span>
         <span className="m-header-theme">
           请选择主题
           <Select
            style={{ width:100 }}
            placeholder="淡浅灰(默认)"
            onChange={(value:any)=>{
              let ele:any = document.querySelector('#root');
              ele.className = value?value:"line";
            }}
          >
            <Option value="line">淡浅灰(默认)</Option>
            <Option value="red">中国红</Option>
            <Option value="blue">天空蓝</Option>
            <Option value="green">草原绿</Option>
          </Select>
         </span>
        <Dropdown overlay={menus}>
          <div className="m-header-user">
            <img src={info.avatar} alt="用户头像" />
            <span>chenmanjie</span>
          </div>
        </Dropdown>

        <Modal
          title="更新用户信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form {...formItemLayout}>
            <Form.Item label="用户头像">
              <Upload
                name="avatar"
                // headers={{"content-type": "multipart/form-data"}}
                listType="picture-card"
                className="avatar-uploader"
                action="http://123.206.55.50:11000/upload"
                showUploadList={false}
                beforeUpload={this.beforeUpload}
                onChange={this.handleChange}
              >
                {avatar ? (
                  <img src={avatar} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <Form.Item label="用户ID">
              {getFieldDecorator("user_id", {
                initialValue: ""
              })(<Input disabled={true} />)}
            </Form.Item>
            <Form.Item label="用户名">
              <Input value={username} name="name" onChange={this.setUser} />
            </Form.Item>
            <Form.Item label="密码">
              <Input value={password} name="pwd" onChange={this.setUser} />
            </Form.Item>
          </Form>
        </Modal>
      </Header>
    );
  }
}

export default Form.create()(Headers);
