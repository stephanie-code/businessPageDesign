import React, { useState } from 'react'
import { Row, Col, Space, Dropdown, Button, Modal, Avatar, Image, Radio } from 'antd';
import { DownOutlined, SmallDashOutlined, UserOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout';
import { Title, menu, campa_button, optionsAwareness, optionsConsideration, optionsConversion } from '../common/constValues'

function AcctComp() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [createCampaignRadio, setcreateCampaignRadio] = useState('')
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onChangeRadio = (optionClicked) => {
        setcreateCampaignRadio(optionClicked.target.value)
    }
    return (
        <div style={{ paddingLeft: '40px', }}>
            <Row align='middle'
                style={{
                    height: '80px',
                    padding: '5px',
                }}>
                <Col span={12}>
                    <Row>
                        <Col span={8}>
                            <p style={{ fontWeight: 'bold', fontSize: 24, paddingTop: '10px' }}>Account Overview</p>
                        </Col>
                        <Col span={6}>
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
                        </Col>
                    </Row>
                </Col>
                
                <Col span={4} align='bottom'>

                    <Button style={campa_button}>
                        <SmallDashOutlined />
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <div>
                        <Title level={2}>Good Morning, Stephy</Title>
                        <p style={{ fontSize: 18, color: 'green' }}>Here's what's happening with your account today.</p>
                    </div>
                </Col>
            </Row>

            <Row gutter={[32, 16]} style={{ paddingRight: '50px' }}>
                <Col flex={8} style={{ paddingLeft: '80px', }}>
                    <Content style={{ background: 'white' }}>
                        <Row align='middle'
                            style={{
                                height: '80px',
                                padding: '5px'
                            }}>
                            <Col span={12}>
                                <Space>
                                    <p style={{ fontWeight: 'bold', fontSize: 24, paddingTop: '10px' }}>Campaigns trends</p>
                                    <div style={{ display: 'inline' }}>
                                        <div style={{ float: 'left' }}>
                                            Last 7 days
                                        </div>
                                        <div style={{ float: 'right' }}>
                                            <DownOutlined />
                                        </div>
                                    </div>
                                </Space>
                            </Col>

                            <Col span={12} align='bottom'>
                                <div style={{
                                    float: 'right',
                                }}>
                                    <Space>
                                        <Button type="primary" style={campa_button}>
                                            Results
                                        </Button>
                                        <Button type="primary"
                                            onClick={showModal}
                                            style={{ background: 'lightgreen', height: '40px', borderRadius: '7px', }}
                                        >
                                            Create
                                        </Button>
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                        <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <Button title="Create New Campaign">Create New Campaign </Button>
                            <p> Choose a campaign objective</p>
                            <a>Learn more</a>
                            <Row>
                                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                    <p>Awareness</p>
                                    <Radio.Group options={optionsAwareness} onChange={onChangeRadio} value={createCampaignRadio} />

                                </Col>
                                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                    <p>Consideration</p>
                                    <Radio.Group options={optionsConsideration} onChange={onChangeRadio} value={createCampaignRadio} />

                                </Col>
                                <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                                    <p>Conversion</p>
                                    <Radio.Group options={optionsConversion} onChange={onChangeRadio} value={createCampaignRadio} />

                                </Col>
                            </Row>

                        </Modal>
                        <div style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                            <Image
                                style={{ display: 'block' }}
                                width={200}
                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            />
                            <p>
                                Create a campaign to see trends
                            </p>
                            <p>
                                Create a campaign and start reaching new people. Once your campaign is up and running, you can view performance trends here.
                            </p>
                        </div>

                    </Content>
                </Col>
                <Col flex={1} style={{ width: '400px' }}>
                    <Content style={{ background: 'white' }}>
                        <div style={{ padding: '30px' }}>
                            <Space style={{ padding: '10px 0px' }}>
                                <Avatar icon={<UserOutlined />} />
                                Stephy Sekaran
                            </Space>
                            <Row gutter={[16, 16]}>
                                <Col span={18}>Active Campaigns</Col>
                                <Col span={6} style={{ textAlign: 'end' }}>0</Col>
                                <Col span={18}><b>Last 7 days</b></Col>
                                <Col span={6} style={{ textAlign: 'end' }}></Col>
                                <Col span={18}>Amount spent</Col>
                                <Col span={6} style={{ textAlign: 'end' }}>0.00</Col>
                                <Col span={18}>Percent spent in learning phase</Col>
                                <Col span={6} style={{ textAlign: 'end' }}>0%</Col>
                            </Row>
                        </div>
                    </Content>
                </Col>
            </Row>

        </div>
    );
}
export default AcctComp;