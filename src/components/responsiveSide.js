import React, { Component } from 'react'
import { Menu, Layout, } from 'antd';
import { UserOutlined, VideoCameraOutlined, HomeTwoTone } from '@ant-design/icons';
import { Sider, Content } from '../common/constValues'
import CampaComp from './campaComp'
import ResponsiveCampaign from './responsiveCampaign'
import AcctComp  from './acctoverviewComp';

export default class Responsive extends Component {
    state = {
        collapsed: false,
        loadPage: '',
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    clickHandler = (menu) => {
        this.setState({
            loadPage: menu.key
        })
        console.log(this.state.loadPage);
        //<AcctComp text={this.state.loadPage} />
    }
    render() {
        const { collapsed } = this.state;
        let a
        if (!collapsed) {
            a = <p>Facebook</p>
        }
        else {
            a =<HomeTwoTone />
        }
        return (
            <>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="60"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    collapsible collapsed={collapsed} onCollapse={this.onCollapse}
                >
                    <div className="logo1" >{a}</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['acct-overview']}>
                        <Menu.Item
                            key="acct-overview"
                            icon={<UserOutlined />}
                            onClick={this.clickHandler}>
                            Account overview
                        </Menu.Item>
                        <Menu.Item
                            key="campa"
                            icon={<VideoCameraOutlined />}
                            onClick={this.clickHandler}>
                            Campaigns
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {this.state.loadPage === 'acct-overview' ? <AcctComp /> : <ResponsiveCampaign />}
                        </div>
                    </Content>
                </Layout>
            </>
        );
    }
}