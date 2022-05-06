import { Component, ReactNode } from "react";
import "./energy.css";
import Navigation from "../../components/Navigation";
import { Button, Input, Tabs } from "antd";

const { TabPane } = Tabs;

const Mock = require("mockjs");

export default class Energy extends Component {
  $energyList = [];
  getEnergyList = () => {
    const data = Mock.mock({
      "list|27-31": [
        {
          symbol: /[A-Z]{2,4}/,
          totalSupply: /[1-9]{1}\d{7,11}/,
          addressCounts: /[1-9]{1}\d{2,9}/,
        },
      ],
    }).list;

    let temp: JSX.Element[] = [];
    data.forEach(
      (el: {
        symbol: string;
        totalSupply: string;
        addressCounts: string;
        [key: string]: string;
      }) => {
        temp.push(
          <ul>
            <li> {el.symbol} </li>
            <li> {el.totalSupply} </li>
            <li> {el.addressCounts} </li>
          </ul>
        );
      }
    );
    return temp;
  };
  render(): ReactNode {
    return (
      <div id="energy">
        <Navigation />
        <div className="content">
          <div className="left">
            <div className="title">
              <h3>ERC20通证管理</h3>
            </div>
            <br />
            <br />
            <div className="tip">发行总量：</div>
            <div className="totalSupply">
              <span>21000000 IVIL</span>
            </div>
            <br />
            <div className="divider"></div>
            <br />
            <div className="row">
              <Input placeholder="value"></Input>
            </div>
            <div className="row">
              <Button className="button">发行 IVIL</Button>
            </div>
            <br />
            <div className="row">
              <Input placeholder="value"></Input>
            </div>
            <div className="row">
              <Button className="button">销毁 IVIL</Button>
            </div>
            <div className="divider"></div>
          </div>
          <div className="main">
            <div className="title">
              <h3>能源数据总览</h3>
            </div>
            <div className="listTitle">
              <ul>
                <li>能源名称</li>
                <li>发行总量</li>
                <li>持仓地址数</li>
              </ul>
            </div>
            <div className="list">{this.getEnergyList()}</div>
          </div>
          <div className="right">
            <div className="title">
              <h3>能源管理</h3>
            </div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="能源种类管理" key="1">
                <div className="tip">以下操作仅限管理员账户</div>
                <div className="divider"></div>
                <div className="inputs">
                  <div className="row">
                    <Input className="input" placeholder="name"></Input>
                    <Input className="input" placeholder="symbol"></Input>
                  </div>
                  <div className="row">
                    <Input className="input" placeholder="decimals"></Input>
                    <Input className="input" placeholder="totalSupply"></Input>
                  </div>
                </div>
                <div className="row">
                  <Button className="button">铸造能源</Button>
                </div>
                <br />
                <div className="divider"></div>
                <br />
                <div className="row">
                  <Input placeholder="symbol"></Input>
                </div>
                <div className="row">
                  <Button className="button">禁售能源</Button>
                </div>
                <br />
                <div className="divider"></div>
              </TabPane>
              <TabPane tab="能源发行量管理" key="2">
                <div className="tip">以下操作仅限管理员账户</div>
                <div className="divider"></div>
                <div className="tip">发行指定能源：</div>
                <div className="inputs">
                  <div className="row">
                    <Input className="input" placeholder="symbol"></Input>
                    <Input className="input" placeholder="value"></Input>
                  </div>
                </div>
                <div className="row">
                  <Button className="button">发行能源</Button>
                </div>
                <div className="divider"></div>
                <br />
                <div className="tip">销毁指定能源：</div>
                <div className="inputs">
                  <div className="row">
                    <Input className="input" placeholder="symbol"></Input>
                    <Input className="input" placeholder="value"></Input>
                  </div>
                </div>
                <div className="row">
                  <Button className="button">销毁能源</Button>
                </div>
                <div className="divider"></div>
                <br />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
