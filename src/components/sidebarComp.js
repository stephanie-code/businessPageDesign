import React, { Component } from 'react'
import { Menu, Drawer, Divider } from 'antd';
import { DashboardOutlined, HomeTwoTone, MenuOutlined } from '@ant-design/icons';
import { Sider } from '../common/constValues'
import Layout from 'antd/lib/layout/layout';

export default class SidebarComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            loadPage: 'acct-overview',
            visible: false,
            placement: 'left',
        };
    }


    onCollapse = collapsed => {
        console.log("onCollapse fn", collapsed);
        this.setState({ 
            collapsed,
         });
    };
    clickHandler = (menu) => {
        this.setState({
            loadPage: menu.key
        })
        console.log(this.state.loadPage);
        //<AcctComp text={this.state.loadPage} />
    }

    // Drawer methods
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };
    render() {
        let a
        if (!this.state.collapsed) {
            a =
                <>
                    <Layout className='sidebar_title'>
                        <p>Facebook</p>
                        <MenuOutlined onClick={this.showDrawer} />
                    </Layout>
                </>
        }
        else {
            a =
                <>
                    <HomeTwoTone />
                </>
        }
        return (
            <>
                <Sider 
                    breakpoint="md"
                    collapsedWidth="" //Decides the visibility of sidebar
                    className='sider_class'
                    // trigger={null}
                    collapsed={this.state.collapsed} onCollapse={this.onCollapse}
                    // reverseArrow= {true}
                    zeroWidthTriggerStyle={{top:0}}
                >
                    <div className="logo1" >{a}</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['acct-overview']}>
                        <Menu.Item
                            key="acct-overview"
                            icon={<DashboardOutlined />}
                            // onClick={this.clickHandler}
                            onClick={this.props.handlerParent
                                // this.onCollapse
                            }
                        >
                            Account overview
                        </Menu.Item>
                        <Menu.Item
                            key="campa"
                            icon={<MenuOutlined />}
                            // onClick={this.clickHandler}
                            onClick={
                                this.props.handlerParent
                                // this.onCollapse
                            }
                        >
                            Campaigns
                        </Menu.Item>
                    </Menu>
                </Sider>
                {/* <Layout>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {this.state.loadPage === 'acct-overview' ? <AcctComp /> : <ResponsiveCampaign />}
                        </div>
                    </Content>
                </Layout> */}

                {/* Drawer */}
                <Drawer
                    title='All tools'
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    key={this.state.placement}
                >
                    <Menu mode="inline"
                        className='sider_drawer_menu'>
                        <Divider plain className='sider_divider'>Manage business</Divider>
                        {/* <SubMenu key="sub1" title="subnav 1" className='sider_divider'> */}
                        <Menu.Item key="Manage_1" >
                                Account Quality
                        </Menu.Item>
                        <Menu.Item key="Manage_2">
                            Billing
                        </Menu.Item>
                        <Menu.Item key="Manage_3">
                            Brand Safety
                        </Menu.Item>
                        <Menu.Item key="Manage_4">
                            Business Settings
                        </Menu.Item>
                        <Menu.Item key="Manage_5" >
                            Events Manager
                        </Menu.Item>
                        <Menu.Item key="Manage_6" >
                            Media Library
                        </Menu.Item>
                        <Menu.Item key="Manage_7" >
                            Shop Locations
                        </Menu.Item>
                        {/* </SubMenu> */}
                        <Divider plain className='sider_divider'>advertise</Divider>
                        <Menu.Item key="advertise_1" >
                            ad account settings
                        </Menu.Item>
                        <Menu.Item key="advertise_2" >
                            ad limit per page
                        </Menu.Item>
                        <Menu.Item key="advertise_3">
                            ads manager
                        </Menu.Item>
                        <Menu.Item key="advertise_4">
                            audiences
                        </Menu.Item>
                        <Menu.Item key="advertise_5" >
                            automated rules
                        </Menu.Item>
                        <Menu.Item key="advertise_6" >
                            creative hub
                        </Menu.Item>
                    </Menu>
                </Drawer>
                
            </>
        );
    }
}