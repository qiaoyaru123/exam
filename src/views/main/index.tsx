import * as React from "react";
import {
  Layout,
  Menu,
  Icon,
  Form
} from "antd";
import { NavLink } from "react-router-dom";
import { sliderBar } from "../../config/index";
import { inject, observer } from "mobx-react";
import RouterView from "../../router/RouterView";
import Headers from "../../component/Headers"
import "./index.css"

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

interface PropsInfo {
  user: any,
  abc?: string,
  form?: any
}

@inject('user')
@observer

class Main extends React.Component<PropsInfo, any> {
  state = {
    sliderBar,
    collapsed: false,
    visible: false,
    loading: false,
    imageUrl:"",
    user_id:""
  };

  public render() {

    return (
      <Layout>
        <Headers/>
        <Layout style={{ minHeight: "90vh" }}>
          <Sider
            className="slider"
            trigger={null}
            collapsed={this.state.collapsed}
          >
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              {this.state.sliderBar.map(slider => {
                return slider.children === undefined ||
                  slider.children.length < 1 ? (
                    <Menu.Item key={slider.id}>
                      <Icon type={slider.icon} />
                      <span>
                        <NavLink to={slider.path}>{slider.name}</NavLink>
                      </span>
                    </Menu.Item>
                  ) : (
                    <SubMenu
                      key={slider.id}
                      title={
                        <div>
                          <Icon type={slider.icon} />
                          <span>
                            <NavLink to={slider.path}>{slider.name}</NavLink>
                          </span>
                        </div>
                      }
                    >
                      {slider.children &&
                        slider.children.map(children => {
                          return (
                            <Menu.Item key={children.id}>
                              <span>
                                <NavLink to={children.path}>
                                  {children.name}
                                </NavLink>
                              </span>
                            </Menu.Item>
                          );
                        })}
                    </SubMenu>
                  );
              })}
            </Menu>
          </Sider>
          <Content
            className="content"
            style={{ padding: "0 24px", background: "#f0f2f5"}}
          >
            <RouterView routes={this.props.children}></RouterView>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Form.create()(Main);
