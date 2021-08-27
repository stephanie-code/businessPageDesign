import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Row, Col, Menu } from 'antd';
import "antd/dist/antd.css";

import BusinessAppComp from './components/businessAppComp'
import LogInComp from './components/logInComp'
import './App.css'
import Routes from './routes';
import TestComp from './components/testcomp';
import AcctComp from './components/acctoverviewComp';
import ResponsiveCampaignFunc from './components/responsiveCamapignFunc';
import SidebarCompFunc from './components/sidebarCompFunc';

class App extends Component {

  render() {

    return (
      <>
        {/* <LogInComp /> */}
        {/* <Router>
          <Row className='header_row'>
            <Col xs={24} sm={8} md={6} lg={4}>
              FACEBOOK 
            </Col>
            <Col xs={24} sm={16} md={18} lg={20}>
              <Menu theme="dark" mode="horizontal"
                style={{ float: 'right'}}
              >
                <Menu.Item key="1">
                  <Link to="/">LogIn</Link>
                </Menu.Item>
                <Menu.Item key="2" >
                  <Link to="/app">Main</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
          <Switch>
            <Route path="/app" component={BusinessAppComp} />
            <Route path="/" component={LogInComp} />
          </Switch>
        </Router> */}

        {/* <div>
          
          <Link to={`/`}>Profile</Link>
          <Link to={`/home/comments`} className="link">Comments</Link>
          <Link to={`/home/contact`} className="link">Contact</Link>
        </div> */}
        {/* <LogInComp /> */}
        {/* <div className="tabs">
        <Switch>
          <Route path={`${path}`} exact component={SidebarCompFunc} />
          <Route path={`${path}/comments`} component={AcctComp} />
          <Route path={`${path}/contact`} component={ResponsiveCampaignFunc} />
        </Switch>
      </div> */}

        <div className="App">
          <Routes />
        </div>
      </>
    );
  }
}

export default App;
