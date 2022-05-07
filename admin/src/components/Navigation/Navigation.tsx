import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { Modal } from "antd";

const Navigation = () => {
  const NavMenu = [
    {
      name: "合约管理",
      path: "/contract",
    },
    {
      name: "通证管理",
      path: "/energy",
    },
    // {
    //   name: "战略部署",
    //   path: "/",
    // },
    // {
    //   name: "关于我们",
    //   path: "/",
    // },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    window.open("http://localhost:9097");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = () => {
    let temp: JSX.Element[] = [];
    NavMenu.forEach((item: any, index: any) => {
      temp.push(
        <li key={index}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      );
    });
    temp.push(
      // react利用key来识别组件，它是一种身份标识标识
      <li key={'#'}>
        <Link to={"#"} onClick={showModal}>
          {"前往客户端"}
        </Link>
      </li>
    );
    return temp;
  };

  return (
    <div id="nav">
      <span>
        <Link to={"/"}>ivil.world</Link>
      </span>
      <span>{menu()}</span>
      <span>基于区块链的能源管理系统</span>
      <Modal
        title="提示"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>是否前往客户端？</h3>
      </Modal>
    </div>
  );
};

export default Navigation;
