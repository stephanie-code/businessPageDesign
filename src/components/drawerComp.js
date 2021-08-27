import React, { useEffect, useState } from 'react'
import { Drawer, Button, Radio, Space } from 'antd';

function DrawerComp(props) {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState('left')

//   useEffect( (props)=>{
//     showDrawer()    
//  }, []);

  const showDrawer = () => {
    setVisible(true)
    // console.log('from showDrawer')
  };

  const onClose = () => {
    setVisible(false);
    
  };

  const onChange = e => {
    setPlacement(e.target.value)
  };

  return (
    <>
    {console.log('Drawer comp', props.a, visible)}
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default DrawerComp