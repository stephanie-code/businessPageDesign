import React, {Component} from 'react'
import { Modal, Button } from 'antd';

export default class ModalComponent extends Component{
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      visible: this.props.setVisibility,
    };
  }
    
  componentDidUpdate(prevState){
    console.log("Prev state", prevState)
    
    // this.setState({
    //   visible: true
    // })
  }
    
    //   showModal = () => {
    //     this.setState({
    //       visible: this.props.setVisibility,
    //     });
    //   };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    
      checkVisibility = () => {
        if(this.state.visible)
          return this.state.visible
        else
          this.setState({
            visible: true,
        });
    }

    render(){
        console.log('hi from Modalcompo', this.props.setVisibility, this.state.visible)
        return(
            <Modal
                    // visible={this.checkVisibility}
                    visible={this.state.visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            Return
                        </Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                        <Button
                            key="link"
                            href="https://google.com"
                            type="primary"
                            loading={this.state.loading}
                            onClick={this.handleOk}
                        >
                            Search on Google
                        </Button>,
                    ]}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>

                </Modal>
        );
    }
}