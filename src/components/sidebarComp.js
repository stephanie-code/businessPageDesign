import React from 'react'
import { Layout, Menu, Typography, Dropdown, Button, Avatar, Space } from 'antd';
import { DownOutlined, UserOutlined, DashboardOutlined, MenuOutlined } from '@ant-design/icons';
import {menu} from '../common/constValues'

const { Title } = Typography;

class SidebarComp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loadPage: '',
        }
      }

    clickHandler = (menu) => {
        this.setState({
            loadPage: menu.key
        })
        console.log(this.state.loadPage);
        //<AcctComp text={this.state.loadPage} />
    } 

    render() {
        return (
            <Layout
                style={{
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    width: '280px',
                    padding: '10px',
                }}
            >
                <Title level={4} style={{ letterSpacing: '2.5px' }}>FACEBOOK</Title>
                <Title level={2} className="h2.ant-typography">Ads Manager</Title>
                <Dropdown overlay={menu}>
                    <Button shape="round"
                        style={{ height: '80px' }}>
                        <div style={{ display: 'inline' }}>
                            <div style={{ float: 'left' }}>
                                <Space>
                                    <Avatar icon={<UserOutlined />} />
                                    User1
                                </Space>
                            </div>
                            <div style={{ float: 'right' }}>
                                <DownOutlined />
                            </div>
                        </div>
                    </Button>
                </Dropdown>
                <Menu mode="inline" defaultSelectedKeys={['dashboard']}
                    style={{
                        height: '100%',
                        fontSize: '20px',
                        fontFamily: 'sans-serif',
                        overflow: 'auto',
                        marginTop: '30px'
                    }}>
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
            </Layout>
        );
    }
}
// export let page = {this.state.loadPage}
export default SidebarComp
