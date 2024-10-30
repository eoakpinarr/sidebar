import React, { useState } from 'react';
import { Button, Layout, Typography } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

// Sayfa bileşenleri
const Home = () => <div ><Typography.Title level={2}>Ana Sayfa</Typography.Title><p>Bu ana sayfa içeriğidir.</p></div>;
const About = () => <div><Typography.Title level={2}>Hakkında</Typography.Title><p>Bu hakkında sayfasının içeriğidir.</p></div>;
const Services = () => <div><Typography.Title level={2}>Hizmetlerimiz</Typography.Title><p>Bu hizmetlerimiz sayfasının içeriğidir.</p></div>;
const Contact = () => <div><Typography.Title level={2}>İletişim</Typography.Title><p>Bu iletişim sayfasının içeriğidir.</p></div>;

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => { setDarkTheme(!darkTheme); };

  // Tema rengi dark/light seçimine göre manuel ayarlanıyor
  const backgroundColor = darkTheme ? '#001529' : '#ffffff';
  const textColor = darkTheme ? '#ffffff' : '#001529';

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          className='sidebar'
          theme={darkTheme ? 'dark' : 'light'}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />

        </Sider>

        <Layout>
          <Header style={{ padding: 0, background: backgroundColor, color: textColor }}>
            <Button
              type='text'
              className='toggle'
              onClick={() => setCollapsed(!collapsed)}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              style={{ color: textColor }}
            />
          </Header>

          <Content style={{ padding: 24, background: backgroundColor, color: textColor }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Content>

          <Footer style={{ textAlign: 'center', background: backgroundColor, color: textColor }}>
            ©2024 Tüm Hakları Saklıdır
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
