import React, { useState } from 'react'
import { Row, Col, Button, Modal, Avatar, Image, Radio, Select, Tooltip } from 'antd';
import { SmallDashOutlined, UserOutlined, InfoOutlined } from '@ant-design/icons';

import { 
    optionsAwareness, 
    optionsConsideration, 
    optionsConversion, 
    Option 
} from '../common/constValues'
import SidebarCompFunc from './sidebarCompFunc';

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
    const handleChangeResultUser = (value) => {
        console.log(`selected ${value}`);
    }
    const handleChangeResult = (value) => {
        console.log(`selected ${value}`);
    }
    return (
        <>
        
            {/* Start of account overview */}
            <Row gutter={[8, 8]} className="main_AcctCompo" >
                {/* <Col span={8} > */}
                <Col className='title_AcctCompo'
                    xs={{ span: 20, order: 1 }}
                    sm={{ span: 24, order: 1 }}
                    md={{ span: 9, order: 1}}
                    lg={{ span: 9, order: 1 }}
                    xl={{ span: 8, order: 1 }} >
                    {/* <p class='title_AcctCompo'> */}
                    Account Overview
                    {/* </p> */}
                </Col>
                {/* <Col span={8} > */}
                <Col xs={{ span: 18, order: 3 }}
                    sm={{ span: 12, order: 2 }}
                    md={{ span: 12, order: 2 }}
                    lg={{ span: 12, order: 2 }}
                    xl={{ span: 12, order: 2 }} >
                    <Select defaultValue="User1"
                        size='large'
                        style={{ width: 250 }}
                        onChange={handleChangeResultUser}>
                        <Option value="User1">User 1</Option>
                        <Option value="User2">User 2</Option>
                        <Option value="User3">User 3</Option>
                    </Select>
                </Col>
                {/* <Col span={8}> */}
                <Col xs={{ span: 4, order: 2 }} sm={12} md={3} lg={3} xl={4} order={3} >
                    <div class='smallDashedButton'>
                        <Button>
                            <SmallDashOutlined />
                        </Button>
                    </div>

                </Col>
            </Row>
            {/* End of header in account overview */}
            {/* <Row className='main-div-content'> */}
                <Row>
                    <Col sm={24} md={24} lg={24}>
                        <Col span={24} className='greeting-text1' >
                            Good morning
                        </Col>
                        <Col span={24} className='greeting-text2' >
                            Here's what's happening with your account today.
                        </Col>
                    </Col>
                </Row>

                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={24} lg={18} >
                        {/* <Content className='content1'> */}
                        <Row gutter={[8, 16]}>
                            <Col xs={24} sm={24} md={8} lg={8} className='campaign-tends-heading'>
                                Campaigns trends
                                {/* <p class='campaign-tends-heading'>Campaigns trends</p> */}
                            </Col>
                            <Col xs={24} sm={14} md={8} lg={6} style={{ paddingTop: '10px' }}>
                                <span >Last 7 days </span>
                                {/* <Tooltip title="prompt text">
                                    <InfoOutlined />
                                </Tooltip> */}
                            </Col>
                            <Col xs={24} sm={14} md={8} lg={10}>
                                <Row gutter={[8, 8]} justify='end' align='middle'>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={10} >
                                        <Select defaultValue="Result"  onChange={handleChangeResult}>
                                            <Option value="Result">Result</Option>
                                            <Option value="Cost">Cost per result</Option>
                                        </Select>
                                    </Col>
                                    <Col xs={24} sm={24} md={12} lg={12} xl={10}>
                                        <Button type="primary"
                                            onClick={showModal}
                                        // style={{ background: 'lightgreen', height: '40px', borderRadius: '7px', }}
                                        >
                                            Create
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row justify='center'
                            className='campaign-trends-content'
                        >
                            <Col span={24}>
                                <Image
                                    style={{ display: 'block' }}
                                    width={200}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
                            </Col>
                            <Col span={24}>
                                Create a campaign to see trends
                            </Col>
                            <Col span={24}>
                                Create a campaign and start reaching new people. Once your campaign is up and running, you can view performance trends here.
                            </Col>
                        </Row>

                        {/* </Content> */}
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={6} >
                        <Row align='middle'>
                            <Col xs={2} sm={2} md={4} lg={4}><Avatar icon={<UserOutlined />} /></Col>
                            <Col xs={20} sm={20} md={18} lg={18}>Username</Col>
                        </Row>
                        <Row align='bottom'>
                            <Col xs={20} sm={20} md={18} lg={18}>Active Campaigns</Col>
                            <Col xs={4} sm={4} md={6} lg={6}>0</Col>
                        </Row>
                        <Row align='bottom'>
                            <Col xs={20} sm={20} md={18} lg={18}>Last 7 days</Col>
                            <Col xs={4} sm={4} md={6} lg={6}></Col>
                        </Row>
                        <Row align='bottom'>
                            <Col xs={20} sm={20} md={18} lg={18}>Amount spent</Col>
                            <Col xs={4} sm={4} md={6} lg={6}>0.00</Col>
                        </Row>
                        <Row align='bottom'>
                            <Col xs={20} sm={20} md={18} lg={18}>Percent spent in learning phase</Col>
                            <Col xs={4} sm={4} md={6} lg={6}>0%</Col>
                        </Row>
                    </Col>
                </Row>
            {/* </Row > */}
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Button title="Create New Campaign">Create New Campaign </Button>
                <p>Choose a campaign objective</p>
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
        </>
    );
}
export default AcctComp;