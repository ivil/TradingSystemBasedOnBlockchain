import "./contract.css";
import Navigation from "../../components/Navigation";
import { Button, Input } from "antd";
import migrate from "../../web3/scripts/Migrate";
import { autoCreateEnergies } from "../../web3/scripts/autoCreateEnergies";

const Mock = require("mockjs");

const Contract = () => {
  const adminAccount = {
    address: "",
    privateKey: "",
  };
  // 获取测试用例
  const TestCases = () => {
    let temp: JSX.Element[] = [];
    const data = Mock.mock({
      "list|30-50": [
        {
          symbol: /[A-Z]{2,4}/,
          count: /[1-9]{1}\d{0,9}/,
          price: /[1-9]{1}\d{0,13}/,
          type: /(出售)|(购买)/,
        },
      ],
    }).list;
    data.forEach((el: any, index: any) => {
      temp.push(
        <ul key={index}>
          <li> {el.symbol} </li>
          <li> {el.count} </li>
          <li> {el.price} </li>
          <li> {el.type} </li>
        </ul>
      );
    });
    return temp;
  };
  // 部署合约
  const migrateContract = () => {
    sessionStorage.setItem("adminAccount", adminAccount.address);
    sessionStorage.setItem("adminPrivateKey", adminAccount.privateKey);
    migrate(adminAccount.address, adminAccount.privateKey);
  };

  return (
    <div id="contract">
      <Navigation />
      <div className="content">
        <div className="left">
          <div className="title">
            <h3>合约</h3>
          </div>
          <br />
          <div className="tip">注意：部署合约的地址将成为管理员账户 ！</div>
          <div className="row">
            <Input
              onChange={(e) => {
                adminAccount.address = e.target.value;
              }}
              placeholder="account address"
            ></Input>
          </div>
          <div className="row">
            <Input
              onChange={(e) => {
                adminAccount.privateKey = e.target.value;
              }}
              placeholder="private key"
            ></Input>
          </div>
          <div className="row">
            <Button onClick={migrateContract} className="button">
              部署合约
            </Button>
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
            <div className="listTitle">
              <h3>测试成功用例：</h3>
              <ul>
                <li>能源</li>
                <li>数量</li>
                <li>价格</li>
                <li>交易&nbsp;&nbsp;</li>
              </ul>
            </div>
            <div className="testList">{TestCases()}</div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <h3>测试脚本</h3>
          </div>
          <div className="script">
            <div className="tip">以下操作仅限管理员账户，测试用例约莫30例</div>
            <div className="row">
              <Button className="button" onClick={autoCreateEnergies}>
                自动创建能源
              </Button>
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
};

export default Contract;
