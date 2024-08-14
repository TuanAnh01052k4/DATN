
import {
  BarChartOutlined,
  MessageOutlined,
  OrderedListOutlined,
  PlusOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useContext } from "react";
import { AppContext } from "../../../common/contexts/AppContextProvider";
import { Link, NavLink } from "react-router-dom";


const SidebarAdmin = () => {
  const { collapsed } = useContext(AppContext);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <BarChartOutlined />,
            label: "Thống kê",
          },
          {
            key: '2',
            icon: <OrderedListOutlined />,
            label: 'Danh mục',
            children:[
              {
                key:"2.1",
                label:<NavLink to={`/admin/categories`}>Danh mục</NavLink>
              },
              {
                key:"2.2",
                label:<NavLink to={`/admin/categories/add`}>Thêm danh  mục</NavLink>
              }
            ]
          },
          {
            key: "7",
            icon: <OrderedListOutlined />,
            label: "Màu sắc",
            children: [
              {
                key: "7.1",
                label: <NavLink to={"/admin/colors"}>Danh sách</NavLink>,
              },
            ],
          },
          {
            key: "3",
            icon: <ProductOutlined />,
            label: "Sản phẩm",
            children: [
              {
                key: "3.1",
                label: <NavLink to={"/admin/products"}>Danh sách</NavLink>,
              },
              {
                key: "3.2",
                icon: <PlusOutlined />,
                label: <NavLink to={"/admin/products/add"}>Sản phẩm</NavLink>,
              },
            ],
          },
          {
            key: "4",
            icon: <UserOutlined />,
            label: "Người dùng",
            children: [
              {
                key:"4.1",
                label:<Link to={'/admin/auth'}>Danh sách</Link>
              }
            ],
          },
          {
            key: "5",
            icon: <ShoppingCartOutlined />,
            label: "Đơn hàng",
            children: [
              {
                key: "4.1",
                label: <Link to={"/"}>Danh sách</Link>,
              },
            ],
          },
          {
            key: "6",
            icon: <MessageOutlined />,
            label: "Tin Nhắn",
          },
        ]}
      />
    </Sider>
  );
};

export default SidebarAdmin;
