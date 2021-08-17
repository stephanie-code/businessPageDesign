import React, { Component } from 'react'
import { Layout, Menu, Typography, Space } from 'antd';
import {
    DashboardOutlined,
    MenuOutlined,
    HomeTwoTone
} from '@ant-design/icons';
import "antd/dist/antd.css";

const { Text } = Typography;
const { Sider } = Layout;

export default class SideCollapse extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    render() {
        const { collapsed } = this.state;
        let a
        if (!collapsed) {
            a = (
                <>
                <div className="side-title-child1">
                    <Text>FACEBOOK</Text>
                    <p />
                    <Text type="secondary">Ads Manager</Text>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['acct-overview']} mode="inline">
                <Menu.Item key="acct-overview" className="ant-menu-item" onClick={this.props.handlerParent}>
                    <Space>
                        <DashboardOutlined />
                        Account overview
                    </Space>
                </Menu.Item>
                <Menu.Item key="campa" onClick={this.props.handlerParent}>
                    <Space>
                        <MenuOutlined />
                        Campaigns
                    </Space>
                </Menu.Item>
            </Menu>
            </>
            )
        }
        else {
            a = (
            <>
                <div className="side-title-child1">
                    <HomeTwoTone />
                </div>
                <Menu theme="dark" defaultSelectedKeys={['acct-overview']} mode="inline">
                <Menu.Item key="acct-overview" className="ant-menu-item" onClick={this.props.handlerParent}>
                    <Space>
                        <DashboardOutlined />
                    </Space>
                </Menu.Item>
                <Menu.Item key="campa" onClick={this.props.handlerParent}>
                    <Space>
                        <MenuOutlined />
                        
                    </Space>
                </Menu.Item>
            </Menu>
                </>
            )
        }
        return (
            <>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
                    {/* <div className="side-title-child1">
                        <Text>FACEBOOK</Text>
                        <p/>
                        <Text type="secondary">Ads Manager</Text>
                    </div> */}

                    {a}
                    
                </Sider>
            </>
        );
    }
}