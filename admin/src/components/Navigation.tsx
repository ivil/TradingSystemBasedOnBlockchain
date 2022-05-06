import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  $NavMenu = [
    {
      name: "合约管理",
      path: "/contract",
    },
    {
      name: "能源管理",
      path: "/energy",
    },
    {
      name: "战略部署",
      path: "/",
    },
    {
      name: "关于我们",
      path: "/",
    },
  ];
  test = () => {
    let temp: JSX.Element[] = [];
    this.$NavMenu.forEach((item, index) => {
      temp.push(
        <li key={index}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      );
    });
    return temp;
  };
  render(): ReactNode {
    return (
      <div id="nav">
        <span>
          <Link to={"/"}>ivil.world</Link>
        </span>
        <span>
          <ul>{this.test()}</ul>
        </span>
        <span>基于区块链的能源管理系统</span>
      </div>
    );
  }
}
