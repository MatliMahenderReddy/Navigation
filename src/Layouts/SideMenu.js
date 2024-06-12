import React from "react";
import { Menu } from "antd";
import { UserOutlined, TwitterOutlined, MediumOutlined, AntCloudOutlined, DoubleLeftOutlined } from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";
import Component from "./Component";
const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Menu
        onClick={({ key }) => {
          if (key === 'signout') {
            // Handle signout action
            alert("you want signout")
          } else {
            navigate(key);
          }
        }}
        mode="vertical" // Set the mode to vertical or horizontal based on your design
        defaultSelectedKeys={["/"]} // Set the default selected key based on the current route
        items={[
            {label:"Home",key:"/",icon:<UserOutlined />},
            {label:"Dashboard",key:"/dashboard", icon:<TwitterOutlined />},
            {label:"Users List",key:"/userlist", icon:<MediumOutlined />},
            {label:"Profile",key:"/profile", icon:<AntCloudOutlined />},
            {label:"Signout",key:"signout",icon:<DoubleLeftOutlined />,danger:true},
            ]}>
      </Menu>
         <Component />
    </div>
  );
};

export default SideMenu;
