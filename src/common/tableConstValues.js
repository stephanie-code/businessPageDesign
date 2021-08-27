import { Space } from 'antd';

export const header = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation'
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        key: 'designation',
        render: (text, record) => (
            <Space size = "middle" >
                <a>Delete </a>
            </Space >
        )
    }
];

export const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        designation: 'Teacher'
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        designation: ['Athelet', 'Boxer']
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        designation: 'Manager'
    },
];