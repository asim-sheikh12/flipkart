import { Input, Button } from "antd";
import { Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";
import {
  DownOutlined,
  AudioOutlined,
  BellFilled,
  ShopFilled,
  QuestionCircleFilled,
  RiseOutlined,
  DownloadOutlined,
  UserOutlined,
  PlusSquareTwoTone,
  WalletTwoTone,
  HeartTwoTone,
  GiftTwoTone,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../Redux/Actions/modal_Action/action";
import { LoginModal } from "../LoginModal/Modal";
import { useEffect, useState } from "react";
import "./Header.css";
import { Cart } from "../../Pages/Cart/Cart";

export const Headers = () => {
  const [isOpen, setisOpen] = useState(false);
  const appDispatch = useDispatch();
  const modalStatus = useSelector((state) => state.reducer.modalStatus);
  useEffect(() => {
    setisOpen(modalStatus);
  }, [modalStatus]);
  const { Search } = Input;
const loginMenu = (
  <Menu>
    <Menu.Item key="0">
        <span className="moreMenu">
          New Customer? <a>Signup</a>
        </span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <UserOutlined className="moreMenuIcons" />
   <Link to="/profile">
        <span className="moreMenu">My Profile </span>
       </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <PlusSquareTwoTone className="moreMenuIcons" />
      <Link to="/plus">
      <span className="moreMenu">Flipkart Plus Zone</span>
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <WalletTwoTone className="moreMenuIcons" />
      <Link to="/allAddresses">
      <span className="moreMenu">Address</span>
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">
      <HeartTwoTone className="moreMenuIcons" />
      <Link to="/wishlist">
      <span className="moreMenu">Wishlist</span>
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">
      <GiftTwoTone className="moreMenuIcons" />
      <Link to="/rewards">
      <span className="moreMenu">Rewards</span>
      </Link>
    </Menu.Item>
  </Menu>
);
const menu = (
  <Menu>
    <Menu.Item key="0">
      <BellFilled className="moreMenuIcons" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        <span className="moreMenu">Notification Preferences</span>
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <ShopFilled className="moreMenuIcons" />
    <Link to='/register'>
        <span className="moreMenu">Sell on Flipkart</span>
    </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <QuestionCircleFilled className="moreMenuIcons" />
      <span className="moreMenu">24X7 Customer Care</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <RiseOutlined className="moreMenuIcons" />
      <span className="moreMenu">Advertise</span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">
      <DownloadOutlined className="moreMenuIcons" />
      <span className="moreMenu">Download App</span>
    </Menu.Item>
  </Menu>
);
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
  return (
    <div className="header">
      <div className="logo">
       <Link to='/'><img className="logo" src="images/Flipkart.jpg" /></Link>
      </div>
      <div className="header__second">
        <Search
          className="search"
          placeholder="Search for products,brands and more"
          size="large"
          style={{ width: 500 }}
          suffix={suffix}
          // onSearch={onSearch}
        />
      </div>
      <Dropdown
        overlay={loginMenu}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <Button
          className="login-btn"
          type="primary"
          onClick={() => appDispatch(openModal(!isOpen))}
        >
          Login
        </Button>
      </Dropdown>
      {isOpen && <LoginModal data={isOpen} />}
      <Dropdown
        overlay={menu}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <a
          className="ant-dropdown-link More"
          onClick={(e) => e.preventDefault()}
        >
          More <DownOutlined />
        </a>
      </Dropdown>
      <Cart/>
    </div>
  );
};
