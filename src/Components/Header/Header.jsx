import { Input, Button } from 'antd';
import { Menu, Dropdown} from 'antd';
import { DownOutlined,AudioOutlined,BellFilled,ShopFilled,QuestionCircleFilled,RiseOutlined,DownloadOutlined,UserOutlined,PlusSquareTwoTone,WalletTwoTone,HeartTwoTone,GiftTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../Redux/Actions/action';
import { LoginModal } from '../LoginModal/Modal';
import { useEffect, useState } from 'react';
import './Header.css'
const { Search } = Input;
const loginMenu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        <span className="moreMenu">New Customer?  <a href='#' >Signup</a></span>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
    <UserOutlined className="moreMenuIcons"/>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        <span className="moreMenu">My Profile</span>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
    <PlusSquareTwoTone  className="moreMenuIcons" />
     <span className="moreMenu">Flipkart Plus Zone</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
    <WalletTwoTone className="moreMenuIcons"/>
     <span className="moreMenu">Orders</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">
    <HeartTwoTone className="moreMenuIcons"/>
     <span className="moreMenu">Wishlist</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">
    <GiftTwoTone className="moreMenuIcons"/>
     <span className="moreMenu">Rewards</span>
    </Menu.Item>
  </Menu>
);
const menu = (
  <Menu>
    <Menu.Item key="0">
    <BellFilled className="moreMenuIcons" />
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        <span className="moreMenu">Notification Preferences</span>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
    <ShopFilled className="moreMenuIcons"/>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        <span className="moreMenu">Sell on Flipkart</span>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
    <QuestionCircleFilled className="moreMenuIcons" />
     <span className="moreMenu">24X7 Customer Care</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
    <RiseOutlined className="moreMenuIcons"/>
     <span className="moreMenu">Advertise</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">
    <DownloadOutlined className="moreMenuIcons"/>
     <span className="moreMenu">Download App</span>
    </Menu.Item>
  </Menu>
);
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
export const Headers = () => {
  const [ LoginModel, setLoginModel ] = useState(false)
  const appDispatch = useDispatch();
  const modalStatus = useSelector((state) => state.reducer.modalStatus)
   useEffect(()=>{
     setLoginModel(modalStatus)
   },[modalStatus ])
  return (
    <div className="header">
    {/* <Header className="nav"> */}
    <div className="logo">
    <img className='logo' src='images/Flipkart.jpg'/>
    </div>
    <div className="header__second">
    <Search
      className='search'
      placeholder="Search for products,brands and more"
      size="large"
      style={{ width: 500}}
      suffix={suffix}
      // onSearch={onSearch}
    />
    </div>
    <Dropdown overlay={loginMenu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
    <Button className='login-btn' type="primary" onClick={()=>appDispatch(openModal(!LoginModel))} >Login</Button>
    </Dropdown> 
    {LoginModel && <LoginModal data={LoginModel}/>}
     <Dropdown overlay={menu} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
    <a className="ant-dropdown-link More" onClick={e => e.preventDefault()}>
      More <DownOutlined />
    </a>
  </Dropdown>
  {/* <div className="addToCart"> */}
    <img className="cartIcon" src='/images/cart.png' />
  <span className="cart">Cart</span>
  {/* </div> */}

    </div>
  )
}
