import React, { useState } from 'react'
import { Row, Col, Menu } from 'antd';
import "antd/dist/antd.css";

import SidebarCompFunc from './sidebarCompFunc'

import Routes from '../routes';

export default function BusinessAppComp() {

  const [isLoddedIn, setIsLoggedIn] = useState(true)
  const [pageInfo, setPageInfo] = useState('acct-overview')
  const { path } = '/home';

  const clickHandler = (someArg) => {
    setPageInfo(someArg.key)
  }
  return (
    <>
      <Row className='header_row'>
        <Col xs={24} sm={8} md={6} lg={4}>
          FACEBOOK
        </Col>
        <Col xs={24} sm={16} md={18} lg={20}>
          <Menu theme="dark" mode="horizontal"
            style={{ float: 'right' }}
          >
            <Menu.Item key="1">
              {/* <Link to="/">LogIn</Link> */}
            </Menu.Item>
            <Menu.Item key="2" >
              {/* <Link to="/app">Main</Link> */}
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={2}
          md={{ span: 6, offset: 0 }}
          lg={{ span: 5, offset: 0 }}
          xl={{ span: 4, offset: 0 }} >
          <SidebarCompFunc handlerParent={clickHandler} />
        </Col>
        <Col xs={22} sm={22}
          md={{ span: 18, offset: 0 }}
          lg={{ span: 19, offset: 0 }}
          xl={{ span: 20, offset: 0 }} >
          {/* {pageInfo === 'acct-overview' ?
                <AcctComp /> : 
                <ResponsiveCampaignFunc />} */}
          <Routes />
        </Col>
      </Row>
    </>
  );
}