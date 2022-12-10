import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Routes, Route, Navigate, NavLink, useNavigate } from "react-router-dom";
import './main.css'
import Home from "./components/Home";
import Add from "./components/Add";
import NotFount from "./components/404";
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('首页', '1', <PieChartOutlined />),
  getItem('添加项目', '2', <DesktopOutlined />),
];
function App() {
  const navigate = useNavigate()

  return (
    <Layout className="layout-container">
      <Sider id="layout-slider">
        <Menu onClick={({ key }) => {
          if (key === '1') {
            navigate('/')
          } else if (key === '2') {
            navigate('/add')
          } else {
            navigate('/404')
          }
        }} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} style={{
          marginTop: '100px'
        }} />
      </Sider>
      <Layout>
        <Header id="layout-header">后台管理系统</Header>
        <Content>
          <div className="content">
            <Routes>
              {/* 在 route 组件中书写你对应的路由，以及路由所对应的组件 */}
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<Add />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="*" element={<NotFount />} />
              {/* <Route path="/about" element={<Add />} /> */}
              {/* <Route path="/add" element={<AddOrEdit />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/edit/:id" element={<AddOrEdit />} />
              <Route path="/" element={<Navigate replace to="/home" />} /> */}
            </Routes>
          </div>
        </Content>

      </Layout>
    </Layout>
  );
}

export default App;

