import { Input, Button } from 'antd';
import { Header } from 'antd/lib/layout/layout'
import { AudioOutlined } from '@ant-design/icons';
import { Menu, Dropdown, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../Redux/Actions/action';
import { LoginModal } from '../LoginModal/Modal';
import { useEffect, useState } from 'react';

const { Search } = Input;

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
     debugger;
     setLoginModel(modalStatus)
   },[modalStatus ])
  return (
    <div>
    <Header className="nav">
    <img src='images/Flipkart.jpg'/>
    <Search
      className='search'
      placeholder="Search for products,brands and more"
      enterButton="Search"
      size="medium"
      suffix={suffix}
      // onSearch={onSearch}
    />
    <Button className='login-btn' type="primary" onClick={()=>appDispatch(openModal(!LoginModel))} >Login</Button>
    {LoginModel && <LoginModal data={LoginModel}/>}
     {/* <Dropdown.Button
      overlay={menu}
      buttonsRender={([leftButton, rightButton]) => [
        <Tooltip title="tooltip" key="leftButton">
          {leftButton}
        </Tooltip>,
        React.cloneElement(rightButton, { loading: true }),
      ]}
    >
      With Tooltip
    </Dropdown.Button> */}
    </Header>

    </div>
  )
}
