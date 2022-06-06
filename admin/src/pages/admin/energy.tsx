import { useEffect, useState } from "react";
import "./energy.css";
import Navigation from "../../components/Navigation/Navigation";
import { Button, Input, Tabs } from "antd";
import * as user from "../../web3/api/user.api";
import * as admin from "../../web3/api/admin.api";

const { TabPane } = Tabs;
const Mock = require("mockjs");

const Energy = () => {
  // 更新组件时我们都会再次去执行 useEffect
  useEffect(() => {
    // 依赖项可以传入一个空数组，就表示只在初始化时执行一次
    getEnergyList();
    getBalance();
  }, []);

  // 余额
  const [balance, setBalance] = useState("");
  const getBalance = () => {
    user.getBalance().then((value) => {
      setBalance(value);
    });
  };

  // 发行与销毁
  const formWithIvil = {
    post: "",
    destory: "",
  };
  const increaseIVIL = () => {
    admin.createIVIL(Number(formWithIvil.post)).then(() => {
      getBalance();
    });
  };
  const decreaseIVIL = () => {
    admin.destoryIVIL(Number(formWithIvil.destory)).then(() => {
      getBalance();
    });
  };

  // 获取能源列表
  const [energyList, setEnergyList] = useState<JSX.Element[]>();
  const getEnergyList = () => {
    user.getAllTokensInfo().then(
      (
        value: {
          symbol: string;
          totalSupply: string;
          [key: string]: string;
        }[]
      ) => {
        let temp: JSX.Element[] = [];
        value.forEach((el, index) => {
          temp.push(
            <ul key={index}>
              <li> {el.symbol} </li>
              <li> {el.totalSupply} </li>
              <li> {Mock.mock(/[1-9]{1}\d{0,3}/)} </li>
            </ul>
          );
        });
        setEnergyList(temp);
      }
    );
  };

  // 能源铸造与销毁
  const formWithEnergy = {
    name: "",
    symbol_create: "",
    decimals: "",
    totalSupply: "",
    symbol_destory: "",
  };
  const createEnergy = () => {
    admin
      .createToken(
        formWithEnergy.name,
        formWithEnergy.symbol_create,
        Number(formWithEnergy.decimals),
        Number(formWithEnergy.totalSupply)
      )
      .then(() => {
        getEnergyList();
      });
  };
  const destoryEnergy = () => {
    admin.destoryToken(formWithEnergy.symbol_destory).then(() => {
      getEnergyList();
    });
  };

  // 增加或减少指定能源
  const countsOfEnergy = {
    symbol_increase: "",
    count_increase: "",
    symbol_decrease: "",
    count_decrease: "",
  };
  const increaseEnergy = () => {
    admin
      .increaseToken(
        countsOfEnergy.symbol_increase,
        Number(countsOfEnergy.count_increase)
      )
      .then(() => {
        getEnergyList();
      });
  };
  const decreaseEnergy = () => {
    admin
      .decreaseToken(
        countsOfEnergy.symbol_decrease,
        Number(countsOfEnergy.count_decrease)
      )
      .then(() => {
        getEnergyList();
      });
  };

  return (
    <div id="energy">
      <Navigation />
      <div className="content">
        <div className="left">
          <div className="title">
            <h3>ERC20通证管理</h3>
          </div>
          <div className="tip">发行总量：</div>
          <div className="totalSupply">
            <span>{balance}</span>
          </div>
          <br />
          <div className="divider"></div>
          <div className="row">
            <Input
              placeholder="value"
              onChange={(e) => {
                formWithIvil.post = e.target.value;
              }}
            ></Input>
          </div>
          <div className="row">
            <Button className="button" onClick={increaseIVIL}>
              发行 IVIL
            </Button>
          </div>
          <div className="divider"></div>
          <br />
          <div className="tip">
            注：销毁数量不能大于管理员账户中该能源余额 ！
          </div>
          <div className="row">
            <Input
              placeholder="value"
              onChange={(e) => {
                formWithIvil.destory = e.target.value;
              }}
            ></Input>
          </div>
          <div className="row">
            <Button className="button" onClick={decreaseIVIL}>
              销毁 IVIL
            </Button>
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
          <div className="list">{energyList}</div>
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
                  <Input
                    className="input"
                    placeholder="name"
                    onChange={(e) => {
                      formWithEnergy.name = e.target.value;
                    }}
                  ></Input>
                  <Input
                    className="input"
                    placeholder="symbol"
                    onChange={(e) => {
                      formWithEnergy.symbol_create = e.target.value;
                    }}
                  ></Input>
                </div>
                <div className="row">
                  <Input
                    className="input"
                    placeholder="decimals"
                    onChange={(e) => {
                      formWithEnergy.decimals = e.target.value;
                    }}
                  ></Input>
                  <Input
                    className="input"
                    placeholder="totalSupply"
                    onChange={(e) => {
                      formWithEnergy.totalSupply = e.target.value;
                    }}
                  ></Input>
                </div>
              </div>
              <div className="row">
                <Button className="button" onClick={createEnergy}>
                  上架能源
                </Button>
              </div>
              <br />
              <div className="divider"></div>
              <br />
              <div className="row">
                <Input
                  placeholder="symbol"
                  onChange={(e) => {
                    formWithEnergy.symbol_destory = e.target.value;
                  }}
                ></Input>
              </div>
              <div className="row">
                <Button className="button" onClick={destoryEnergy}>
                  下架能源
                </Button>
              </div>
              <br />
              <div className="divider"></div>
            </TabPane>
            <TabPane tab="能源发行量管理" key="2">
              <div className="tip">以下操作仅限管理员账户</div>
              <div className="divider"></div>
              <div className="tip">增发指定能源：</div>
              <div className="inputs">
                <div className="row">
                  <Input
                    className="input"
                    placeholder="symbol"
                    onChange={(e) => {
                      countsOfEnergy.symbol_increase = e.target.value;
                    }}
                  ></Input>
                  <Input
                    className="input"
                    placeholder="value"
                    onChange={(e) => {
                      countsOfEnergy.count_increase = e.target.value;
                    }}
                  ></Input>
                </div>
              </div>
              <div className="row">
                <Button className="button" onClick={increaseEnergy}>
                  增发
                </Button>
              </div>
              <div className="divider"></div>
              <br />
              <div className="tip">回收部分能源：</div>
              <div className="inputs">
                <div className="row">
                  <Input
                    className="input"
                    placeholder="symbol"
                    onChange={(e) => {
                      countsOfEnergy.symbol_decrease = e.target.value;
                    }}
                  ></Input>
                  <Input
                    className="input"
                    placeholder="value"
                    onChange={(e) => {
                      countsOfEnergy.count_decrease = e.target.value;
                    }}
                  ></Input>
                </div>
              </div>
              <div className="row">
                <Button className="button" onClick={decreaseEnergy}>
                  回收
                </Button>
              </div>
              <div className="divider"></div>
              <br />
              <div className="tip">
                注：销毁数量不能大于管理员账户中该能源余额 ！
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Energy;
