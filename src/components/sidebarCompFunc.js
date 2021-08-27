import React, { useState } from 'react'
import { Menu, Drawer, Divider, Layout } from 'antd';
import {
    DashboardOutlined,
    MenuOutlined,
    TableOutlined
} from '@ant-design/icons';

import history from '../history';

export default function SidebarCompFunc(props) {
    const { Header, Content, Footer, Sider } = Layout;

    const [collapsed, setCollapsed] = useState(false)
    const [visible, setVisible] = useState(false)
    const [placement, setPlacement] = useState('left')
    const [needtToShowDrawer, setNeedtToShowDrawer] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
        // console.log("onCollapse fn", collapsed);
    };

    // Drawer methods
    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
    const needToShowDrawerFunc = () => {
        setNeedtToShowDrawer(true)
        console.log('sidebar', needtToShowDrawer)
    }
    return (
        <>
            <Sider
                breakpoint="md"
                collapsedWidth="0" //Decides the visibility of sidebar
                // trigger={null}
                collapsed={collapsed} onCollapse={onCollapse}
                // reverseArrow= {true}
                zeroWidthTriggerStyle={{ top: 0 }}
                className='sider_class'
            >
                <div class='sidebar_title'>
                    Tools<MenuOutlined onClick={showDrawer} />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['acct-overview']}>
                    <Menu.Item
                        key="acct-overview"
                        icon={<DashboardOutlined />}
                        // onClick={
                        //     props.handlerParent
                        // }
                        onClick={
                            () => history.push('/AcctComp')
                        }
                    >
                        Account Overview
                    </Menu.Item>
                    <Menu.Item
                        key="campa"
                        icon={<MenuOutlined />}
                        // onClick={
                        //     props.handlerParent
                        // }
                        onClick={
                            () => history.push('/ResponsiveCampaignFunc')
                        }
                    >
                        Campaign

                    </Menu.Item>
                    <Menu.Item
                        key="Test"
                        icon={<MenuOutlined />}
                        onClick={
                            () => history.push('/TestComp')
                        }
                    >
                        Test Menu
                    </Menu.Item>
                    <Menu.Item
                        key="table"
                        icon={<TableOutlined />}
                        onClick={
                            () => history.push('/tableComp')
                        }
                    >
                        View Table
                    </Menu.Item>
                   
                </Menu>
            </Sider>

            {/* Drawer */}
            <Drawer
                title='All tools'
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={placement}
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