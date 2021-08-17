import React, { Component } from 'react'
import { Row, Col, Button, Dropdown } from 'antd';
import { DownOutlined, ReloadOutlined, SmallDashOutlined, SearchOutlined, FolderOutlined, EditOutlined, CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import { columns, menu, campa_button } from '../common/constValues'

export default class ResponsiveCampaign extends Component {
    render() {
        return (
            <>
                <Row gutter={[5,10]}>
                    <Col xs={6} sm={3} md={1} lg={2} style={{background:'blue'}}>
                        <p style={{ fontWeight: 'bold', paddingTop: '10px' }}>Campaigns</p>

                    </Col>
                    <Col xs={6} sm={6} md={8} lg={3}  style={{background:'lightgrey'}}>
                        <Dropdown overlay={menu}>
                            <Button shape="round"
                                style={{ height: '50px', maxWidth: '250px', minWidth:'100px' }}
                            >
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
                    </Col>
                    <Col xs={6} sm={6} md={8} lg={12}  style={{background:'green'}}>
                        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-end'}}>
                            <p >Updated 45 minutes ago</p>
                            <Button style={campa_button}>
                                <ReloadOutlined />
                            </Button>
                            <Button type="primary" style={campa_button}>
                                Discard Drafts
                            </Button>
                            <Button type="primary" style={campa_button}>
                                Publish
                            </Button>
                            <Button style={campa_button}>
                                <SmallDashOutlined />
                            </Button>
                        </div>
                        
                    </Col>
                </Row>
            </>
        );
    }
}