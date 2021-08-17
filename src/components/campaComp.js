import React from 'react'
import { Table, Row, Col, Space, Dropdown, Button, Tooltip, DatePicker, Tabs,  } from 'antd';
import { DownOutlined, ReloadOutlined, SmallDashOutlined, SearchOutlined, FolderOutlined, EditOutlined, CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import {columns, menu, campa_button} from '../common/constValues'
const { TabPane } = Tabs;

class CampaComp extends React.Component {
    render(){
        return (
            <>
                <Row align='middle'
                    style={{
                        height: '80px',
                        padding: '5px'
                    }}>
                    <Col span={12}>
                        <Space>
                            <p style={{ fontWeight: 'bold', fontSize: 24, paddingTop: '10px' }}>Campaigns</p>
                            <Dropdown overlay={menu}>
                                <Button shape="round"
                                    style={{ height: '50px', width: '300px' }}>
                                    <div style={{ display: 'inline' }}>
                                        <div style={{ float: 'left' }}>
                                            User1
                                        </div>
                                        <div style={{ float: 'right' }}>
                                            <DownOutlined />
                                        </div>
                                    </div>
                                </Button>
                            </Dropdown>
                        </Space>
                    </Col>
    
                    <Col span={12} align='bottom'>
                        <div style={{
                            float: 'right',
                        }}>
                            <Space>
                                <p>Updated 45 minutes ago</p>
                                <Button style={campa_button}>
                                    <ReloadOutlined />
                                </Button>
                                <Button type="primary" style={campa_button}>
                                    Discard Drafts
                                </Button>
                                <Button type="primary" style={campa_button}>
                                    Review and Publish
                                </Button>
                                <Button style={campa_button}>
                                    <SmallDashOutlined />
                                </Button>
                            </Space>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col flex={4}>
                        <Tooltip title="search">
                            <Button shape="round" icon={<SearchOutlined />}
                                style={{
                                    width: '1200px',
                                    height: '50px',
                                    textAlign: 'start'
                                }}>
                                Search and Filter
                            </Button>
                        </Tooltip>
                    </Col>
                    <Col flex={1}>
                        <DatePicker picker="date month year" style={{ height: '45px' }} />
                    </Col>
                </Row>
    
                {/* Tabs */}
                <div className="card-container">
                    <Tabs type="card">
                        <TabPane tab="Campaigns" key="1" style={{background: 'white'}}>
                            <Row justify="start" gutter={[64, 24]}>
                                <Col span={2}>
                                    <Button style={{background:'lightgreen'}}><PlusOutlined />Create</Button>
                                </Col>
                                <Col span={2}>
                                    <Space>
                                        <Button><FolderOutlined /> </Button>
                                        <Button><CaretDownOutlined /> </Button>
                                    </Space>
                                </Col>
                                <Col span={2}>
                                    <Space>
                                        <Button><EditOutlined /> </Button>
                                        <Button><CaretDownOutlined /> </Button>
                                    </Space>
                                </Col>
                            </Row>
                            
                            {/* Table */}
                             <Table columns={columns} scroll={{ x: 1300 }} />
                        </TabPane>
                        <TabPane tab="Ad Set" key="2">
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                        <TabPane tab="Ads" key="3">
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                    </Tabs>
    
                    
                </div>
            </>
        );
    }
}
export default CampaComp;