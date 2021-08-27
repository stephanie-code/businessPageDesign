import React, { useState } from 'react'
import { 
    Table, Row, Col, Space, Button, Tooltip, DatePicker, Tabs, Select, 
    Modal, Radio, Switch,Drawer, Form, Input 
} from 'antd';
import { 
    ReloadOutlined, 
    SmallDashOutlined, 
    SearchOutlined,
    FolderOutlined, 
    EditOutlined, 
    CaretDownOutlined, 
    PlusOutlined 
} from '@ant-design/icons';
import { 
    columns,
    TabPane, 
    Option,
    optionsAwareness, 
    optionsConsideration, 
    optionsConversion 
} from '../common/constValues'

export default function ResponsiveCampaignFunc() {
    const [loadingModal, setLoadingModal] = useState(false)
    const [createCampaignRadio, setCreateCampaignRadio] = useState('')
    const [edit_buying_type, setEdit_buying_type] = useState(false)
    const [edit_campaign_obj, setEdit_campaign_obj] = useState(false)
    const [switchOn, setSwitchOn] = useState('0')
    const [drawerVisible, setDrawerVisible] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    // Drawer methods
    const showDrawer = () => {
        setDrawerVisible(true);
        setCreateCampaignRadio('')
    };

    const onClose = () => {
        setDrawerVisible(false);
        setCreateCampaignRadio('')
    };
    const edit_buying_type_func = () => {
        setEdit_buying_type(true)
    }
    const edit_campaign_obj_func = () => {
        setEdit_campaign_obj(true)
    }

    // RadioButton methods
    const onChangeRadio = (optionClicked) => {
        setCreateCampaignRadio(optionClicked.target.value)
    }

    const handleChangeUser = (value) => {
        console.log(`selected ${value}`);
    }
    
    // Modal methods
    const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {
        setIsModalVisible(false);
        showDrawer()
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
        setCreateCampaignRadio('')
      };
    // End of modal

    // Switch methods
    const onChangeSwitch = (checked) => {
        setSwitchOn(checked)
    };

    // Check Edit icon1 is clicked or not
    let update_buying_type, update_campaign_obj
    if (edit_buying_type) {
        update_buying_type =
            <Select defaultValue="Select" style={{ width: 120 }}
            // onChange={handleChange}
            >
                <Option value="Auction">Auction</Option>

            </Select>
    }
    else {
        update_buying_type = 'Auction'
    }
    // Check Edit icon2 is clicked or not
    if (edit_campaign_obj) {
        update_campaign_obj =
            <>
                <Row>
                    <Col xs={{ span: 12 }} sm={8} lg={{ span: 6, offset: 2 }}>
                        <p>Awareness</p>
                        <Radio.Group options={optionsAwareness} onChange={onChangeRadio}
                            value={createCampaignRadio}
                        />

                    </Col>
                    <Col xs={{ span: 12 }} sm={8} lg={{ span: 6, offset: 2 }}>
                        <p>Consideration</p>
                        <Radio.Group options={optionsConsideration} onChange={onChangeRadio}
                            value={createCampaignRadio}
                        />

                    </Col>
                    <Col xs={{ span: 12 }} sm={8} lg={{ span: 6, offset: 2 }}>
                        <p>Conversion</p>
                        <Radio.Group options={optionsConversion} onChange={onChangeRadio}
                            value={createCampaignRadio}
                        />

                    </Col>
                </Row>
            </>
    }
    else {
        update_campaign_obj = 'Traffic'
    }
    // Check Switch On/Off
    let update_budget_optimization
    if (switchOn) {
        update_budget_optimization =
            <>
                <Form.Item
                    name="campaign_budget"
                    label="Campaign Budget"
                    rules={[{ required: true, message: 'Please enter Budget' }]}
                >
                    <Row>
                        <Col span={12}>
                            <Select defaultValue="Budget" style={{ width: 120 }}
                            // onChange={handleChange}
                            >
                                <Option value="daily">Daily Budget</Option>
                                <Option value="Lifetime">Lifetime Budget</Option>
                            </Select>
                        </Col>
                        <Col span="12">
                            <Input
                                placeholder='800'>
                            </Input>
                        </Col>
                    </Row>

                </Form.Item>
            </>
    }
    else {
        update_budget_optimization = ''
    }
    return (
        <>
            <Row className='main_campaign' gutter={[8, 8]} >
                <Col className='header_campaign'
                    xs={20} sm={24} md={9} lg={9} xl={8}>
                    Campaigns
                </Col>
                <Col
                    xs={{ span: 24, order: 2 }}
                    sm={{ span: 12, order: 1 }}
                    md={{ span: 8, order: 1 }}
                    lg={{ span: 6, order: 1 }}
                    xl={{ span: 6, order: 1 }}>
                    <Select defaultValue="User1"
                        size='large'
                        // style={{ zIndex:0 }}
                        onChange={handleChangeUser}>
                        <Option value="User1">User 1</Option>
                        <Option value="User2">User 2</Option>
                        <Option value="User3">User 3</Option>
                    </Select>
                </Col>
                <Col
                    xs={{ span: 18, order: 1 }}
                    sm={{ span: 12, order: 2 }}
                    md={{ span: 7, order: 2 }}
                    lg={{ span: 9, order: 2 }}
                    xl={{ span: 10, order: 2 }}
                    className='header_campaign_col3'
                >
                    <Row gutter={[8, 8]}>
                        {/* <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}> */}
                        <p >Updated 45 minutes ago</p> &nbsp;&nbsp;&nbsp;
                        <Button
                        // style={campa_button}
                        >
                            <ReloadOutlined />
                        </Button>&nbsp;&nbsp;&nbsp;
                        <Button type="primary"
                        // style={campa_button}
                        >
                            Discard Drafts
                        </Button>&nbsp;&nbsp;&nbsp;
                        <Button type="primary"
                        // style={campa_button}
                        >
                            Publish
                        </Button>&nbsp;&nbsp;&nbsp;
                        <Button>
                            <SmallDashOutlined />
                        </Button>
                        {/* </div> */}
                    </Row>
                </Col>
            </Row>
            <Row align="middle" gutter={[8, 8]}>
                <Col xs={24} sm={12} md={12} lg={18}>
                    <Tooltip title="search">
                        <Button shape="round" icon={<SearchOutlined />}>
                            Search and Filter
                        </Button>
                    </Tooltip>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <DatePicker picker="date month year" style={{ height: '45px' }} />
                </Col>
            </Row>
            <Tabs type="card"
                className='card-container'
                size='large'>
                <TabPane tab="Campaigns" key="1">
                    <Row justify="start" align='middle'>
                        <Col sm={4} md={{ span: 3, offset: 1 }} lg={2} xl={2}>
                            {/* <Button type="primary" onClick={this.handleClick}> */}
                            <Button type="primary" onClick={showModal}
                                icon={<PlusOutlined />}>
                                Create
                            </Button>
                            {/* {this.state.showModelComponent && <ModalComponent setVisibility='true'/>} */}
                        </Col>
                        <Col sm={4} md={{ span: 3, offset: 1 }} lg={2} xl={2}>
                            <Space>
                                <Button type="primary" icon={<FolderOutlined />} />
                                <Button type="primary" icon={<CaretDownOutlined />} />
                            </Space>
                        </Col>
                        <Col sm={4} md={{ span: 3, offset: 1 }} lg={2} xl={2}>
                            <Space>
                                <Button type="primary" icon={<EditOutlined />} />
                                <Button type="primary" icon={<CaretDownOutlined />} />
                            </Space>
                        </Col>
                    </Row>

                    {/* Table */}
                    <Table columns={columns} scroll={{ x: 1300 }} style={{ zIndex: 0 }} />
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

            {/* Modal */}
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel} disabled={!createCampaignRadio}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loadingModal}
                        onClick={handleOk} disabled={!createCampaignRadio}>
                        Continue
                    </Button>
                ]}
            >
                <Button title="Create New Campaign">Create New Campaign </Button>
                <p>Choose a campaign objective</p>
                <a>Learn more</a>
                <Row>
                    <Col xs={{ span: 12 }} sm={8} lg={{ span: 6, offset: 2 }}>
                        <p>Awareness</p>
                        <Radio.Group options={optionsAwareness} onChange={onChangeRadio}
                            value={createCampaignRadio}
                        />

                    </Col>
                    <Col xs={{ span: 12 }} sm={8} lg={{ span: 6, offset: 2 }}>
                        <p>Consideration</p>
                        <Radio.Group options={optionsConsideration} onChange={onChangeRadio}
                            value={createCampaignRadio}
                        />

                    </Col>
                    <Col xs={{ span: 12 }} sm={8} lg={{ span: 6, offset: 2 }}>
                        <p>Conversion</p>
                        <Radio.Group options={optionsConversion} onChange={onChangeRadio}
                            value={createCampaignRadio}
                        />

                    </Col>
                </Row>
            </Modal>

            {/* Drawer */}
            <Drawer
                title="New Campaign"
                width={720}
                onClose={onClose}
                visible={drawerVisible}
                bodyStyle={{ paddingBottom: 80 }}
                closable={false}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                            padding: '20px'
                        }}
                    >
                        <Button onClick={onClose} style={{ marginRight: 8 }}>
                            Cancel
                        </Button>
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark
                    style={{ background: 'rgb(190 190 190 / 20%);' }}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="campaign_name"
                                label="Campaign Name"
                                rules={[{ required: true, message: 'Please enter Campaign Name' }]}
                            >
                                <Input placeholder="New Campaign"
                                    defaultValue="New Campaign" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="ad_categories"
                                label="Special Ad Categories"
                                rules={[{ required: true, message: 'Please enter Ad Categories' }]}
                            >
                                <Select placeholder="Please enter Ad Categories">
                                    <Option value="xiao">Social issues, elections or politics</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="campaign_details"
                                label="Campaign Details"
                                rules={[{ required: true, message: 'Please select campaign details' }]}
                            >
                                <Row>
                                    <Col className='campaign_details_title'
                                        span={24}>
                                        Buying type
                                        <Button icon={<EditOutlined />} onClick={edit_buying_type_func} />
                                    </Col>
                                    <Col className='campaign_details_content'>
                                        {update_buying_type}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='campaign_details_title'
                                        span={24}>
                                        Campaign objective
                                        <Button icon={<EditOutlined />} onClick={edit_campaign_obj_func} />
                                    </Col>
                                    <Col className='campaign_details_content'>
                                        {update_campaign_obj}
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item
                                name="campaign_budget_optimization"
                                label="Campaign Budget Optimization"
                                rules={[{ required: true, message: 'Please choose budget optimization' }]}
                            >
                                <Switch onClick={onChangeSwitch} />
                                {update_budget_optimization}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
}