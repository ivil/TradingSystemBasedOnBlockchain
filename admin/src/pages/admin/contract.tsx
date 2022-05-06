import { Component, ReactNode } from "react";
import "./contract.css";
import Navigation from "../../components/Navigation";

import { Button, Input } from "antd";

export default class Contract extends Component {
  render(): ReactNode {
    return (
      <div id="contract">
        <Navigation />
        <div className="content">
          <div className="left">
            <div className="title">
              <h3>合约</h3>
            </div>
            <br />
            <div className="row">
              <Input placeholder="ABI"></Input>
            </div>
            <div className="row">
              <Input placeholder="ByteCode"></Input>
            </div>
            <div className="row">
              <Button className="button">部署合约</Button>
            </div>
            <div className="divider"></div>
          </div>
          <div className="main">
            <div className="title">
              <h3>测试数据总览</h3>
            </div>
            <div className="data">
              <div className="row">
                <span>合约地址:&nbsp;</span>
                <span>0xF2389f95fb3F47A2AC01a38854641eaCBC3E648e</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="title">
              <h3>测试脚本</h3>
            </div>
            <div className="script">
              <div className="tip">
                以下操作仅限管理员账户，测试用例约莫30例
              </div>
              <div className="row">
                <Button className="button">自动创建能源</Button>
              </div>
              <div className="divider"></div>
              <br />
              <div className="tip">以下操作无身份限制，测试用例约莫30例</div>
              <div className="row">
                <Input placeholder="Test Account Address"></Input>
              </div>
              <div className="row">
                <Input placeholder="Test Account PrivateKey"></Input>
              </div>
              <div className="row">
                <Button className="button">自动发布出售需求</Button>
              </div>
              <div className="row">
                <Button className="button">自动发布购买需求</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
