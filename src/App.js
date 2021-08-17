import './App.css';
import "antd/dist/antd.css";

import { Layout } from 'antd';
import { Component } from 'react';
import Responsive from './components/responsiveSide'

class App extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isLoggedIn: true,
  //     pageInfo: ''
  //   };
  //   this.clickHandler = this.clickHandler.bind(this)
  // }

  // clickHandler = (someArg) => {
  //   this.setState({
  //     pageInfo: someArg.key
  //   })
  // }

  render() {
    return (
      <>
        <Layout>
          <Responsive handlerParent={this.clickHandler} />
        </Layout>
        {/* <Layout>
          <Sider>
            <SidebarComp handlerParent={this.clickHandler} />
        </Sider>*/}
        {/* <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.state.pageInfo == 'acct-overview' ? <AcctComp /> : <CampaComp />}
            </div>
          </Content>
        </Layout> */}
        
      </>
    );
  }
}

export default App;
