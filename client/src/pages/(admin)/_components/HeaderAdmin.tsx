import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import  { useContext } from 'react'
import { AppContext } from '../../../common/contexts/AppContextProvider'

const HeaderAdmin = () => {
    const {collapsed, setCollapsed,colorBgContainer} = useContext(AppContext);
  return (
     <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
  )
}

export default HeaderAdmin