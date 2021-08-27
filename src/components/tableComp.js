import React from 'react'

import { Table, Tag, Space } from 'antd';
import { header, data } from '../common/tableConstValues'

export default function TableComp () {
    return (
        <Table columns={header} dataSource={data} 
            size='large'
            style={{width:'500px', marginLeft:'auto', marginRight:'auto'}}/>
    );
}