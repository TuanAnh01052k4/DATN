import React, { useContext } from 'react';
import { Layout  } from 'antd';
import SidebarAdmin from './_components/SidebarAdmin';
import HeaderAdmin from './_components/HeaderAdmin';
import { AppContext } from '../../common/contexts/AppContextProvider';
import { Outlet } from 'react-router-dom';

const {  Content } = Layout;

const LayoutAdmin: React.FC = () => {
    const {colorBgContainer,borderRadiusLG} = useContext(AppContext)

  return (
    <Layout className='h-screen'>
        <SidebarAdmin />
      <Layout>
        <HeaderAdmin />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;