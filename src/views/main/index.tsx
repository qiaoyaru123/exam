import * as React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import { sliderBar } from '../../config/index';
import RouterView from '../../router/RouterView';
const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

import './index.css';

interface BooleanInfo {
    collapsed: boolean;
    collapsible: boolean;
    props:any
}

class Main extends React.Component<BooleanInfo> {
    props: any;
    state = {
        sliderBar,
        collapsed: false
    };

    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    public render() {
        return (
            <Layout>
                <Header className="title">
                    北京八维研修学院
                </Header>
                <Layout style={{ minHeight: '90vh' }}>
                    <Sider className="slider" trigger={null} collapsed={this.state.collapsed}>
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={['1']}
                            mode="inline"
                        >
                            {this.state.sliderBar.map(slider => {
                                return slider.children === undefined ||
                                    slider.children.length < 1 ? (
                                    <Menu.Item key={slider.id}>
                                        <Icon type={slider.icon} />
                                        <span>
                                            <NavLink to={slider.path}>
                                                {slider.name}
                                            </NavLink>
                                        </span>
                                    </Menu.Item>
                                ) : (
                                    <SubMenu
                                        key={slider.id}
                                        title={
                                            <div>
                                                <Icon type={slider.icon} />
                                                <span>
                                                    <NavLink to={slider.path}>
                                                        {slider.name}
                                                    </NavLink>
                                                </span>
                                            </div>
                                        }
                                    >
                                        {slider.children &&
                                            slider.children.map(children => {
                                                return (
                                                    <Menu.Item
                                                        key={children.id}
                                                    >
                                                        <span>
                                                            <NavLink
                                                                to={
                                                                    children.path
                                                                }
                                                            >
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
                    <Content className="content" style={{ padding: '0 24px', background:"#f0f2f5"}}>
                         <RouterView routes={this.props.children}></RouterView>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main;
