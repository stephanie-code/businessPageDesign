import { Typography, Menu, Layout, Tabs } from 'antd';

// Used in acctOverviewComp.js
export const { Title, Text } = Typography;
export const { Header, Content, Footer, Sider } = Layout;
export const { TabPane } = Tabs;

export const optionsAwareness = [
    { label: 'Brand Awareness', value: 'Brand Awareness' },
    { label: 'Reach', value: 'Reach' },
];
export const optionsConsideration = [
    { label: 'Traffic', value: 'Traffic' },
    { label: 'Engagement', value: 'Engagement' },
    { label: 'App Installs', value: 'App Installs' },
    { label: 'Video Views', value: 'Video Views' },
    { label: 'Lead Generation', value: 'Lead Generation' },
    { label: 'Messages', value: 'Messages' },
];
export const optionsConversion = [
    { label: 'Conversions', value: 'Conversions' },
    { label: 'Catalogue Sales', value: 'Catalogue Sales' },
    { label: 'Store Traffic', value: 'Store Traffic' },
];

//Common to acctOverviewComp.js, campaComp.js 
export const campa_button = {
    // height: '40px',
    background: '#eeeeee',
    borderRadius: '7px',
    color: 'black'
}
//Common to acctOverviewComp.js, campaComp.js and sidebarComp.js
export const menu = (
    <Menu>
        <Menu.Item key="1">
        Testing for long names
        </Menu.Item>
        <Menu.Item key="2">
            User 2
        </Menu.Item>
        <Menu.Item key="3">
            User 3
        </Menu.Item>
    </Menu>
);

//Used in campaComp.js
export const columns = [
  {
    title: 'Campaign name',
    width: 150,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Delivery',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    // fixed: 'left',
  },
  { title: 'Bid strategy', dataIndex: 'address', key: '1' },
  { title: 'Budget', dataIndex: 'address', key: '2' },
  { title: 'Attribution setting', dataIndex: 'address', key: '3' },
  { title: 'Results', dataIndex: 'address', key: '4' },
  { title: 'Reach', dataIndex: 'address', key: '5' },
  { title: 'Impression', dataIndex: 'address', key: '6' },
  { title: 'Cost per result', dataIndex: 'address', key: '7' },
  { title: 'Amount spent', dataIndex: 'address', key: '8' },
  { title: 'Ends', dataIndex: 'address', key: '8' },
]