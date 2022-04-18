import React from 'react'
import {
  MailOutlined,
  SearchOutlined,
  SettingOutlined,
  BellOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { Badge, Dropdown, Menu } from "antd";
import { Link,useNavigate  } from 'react-router-dom';
import { Header_Btn } from '../Header_Btn/Header_Btn';
export const Admin_header = () => {
  const navigate = useNavigate();
  const settingsMenu = (
  <Menu>
        <Menu.Item onClick={() => logOut()} key="1">
        <LogoutOutlined className="moreMenuIcons" />
        <span className="moreMenu">Log Out</span>
      </Menu.Item>
  </Menu>
);
 const logOut = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div>
        <div className="header-container adminHeader">
        <div>
         <Header_Btn/>
        </div>
        <div>
          <Link to ='/admin'><h1 className="heading1">ADMIN DASHBOARD</h1></Link>
        </div>
        <div className="right-nav">
          <div>
            <SearchOutlined className="nav-icon" />
          </div>
          <div>
            <MailOutlined className="nav-icon" />
          </div>
          <div>
            <Badge count={3}>
              <BellOutlined className="bell-icon" />
            </Badge>
          </div>
          <div>
               <Dropdown
            overlay={settingsMenu}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
             <SettingOutlined className="nav-icon" />
          </Dropdown>
    
           
          </div>
          <div>
            <img className="adminImg" src="/images/admin.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}
