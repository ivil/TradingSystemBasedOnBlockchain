# Trading System Based on Blockchain

基于区块链的能源交易系统实现——CUMT信息安全专业毕业设计

### 视频演示

[项目演示地址](https://www.ivil.world/TradingSystemBasedOnBlockchain.mp4)


## 目录

- [上手指南](#上手指南)
  - [开发前的配置要求](#开发前的配置要求)
  - [安装步骤](#安装步骤)
- [文件目录说明](#文件目录说明)
- [软件架构](#软件架构)
- [部署](#部署)
- [使用到的框架](#使用到的框架)
- [贡献者](#贡献者)
  - [如何参与开源项目](#如何参与开源项目)
- [版本控制](#版本控制)
- [作者](#作者)
- [鸣谢](#鸣谢)

### 上手指南

​	本项目适合区块链初级开发者，区块链智能合约采用solidity编写，前端涉及到vue和react以及它们生态相关的技术，服务端涉及到go语言web开发框架gin以及关系型数据库mysql。本项目技术栈较为全面和新颖，有助于区块链初级开发者了解前端如何跟区块链以及跟服务端进行数据交互，服务端如何跟MySQL进行数据交互。数据流转是整个系统的核心，理解它有助于提高软件开发能力，快速入门区块链开发。

###### 开发前的配置要求

[node.js版本：16.14.2](http://nodejs.cn/download/)

yarn版本：1.22.18

```sh
//node安装以后，默认携带npm,用npm安装yarn:
npm install --global yarn
```

[ganache版本：2.5.4](https://trufflesuite.com/ganache/)

[metamusk版本：10.14.6](https://metamask.io/)

[golang版本：go1.18.1 windows/amd64](https://go.dev/dl/)

[MySQL版本：5.7.26](https://www.xp.cn/)(在集成环境PHPstudy里可直接使用，方便快捷)

[remix](https://remix.ethereum.org/)(由于truffle安装对网络环境有着极高的要求，因此推荐用remix进行智能合约的编译部署)

###### **安装步骤**

1. clone项目

```sh
git clone https://github.com/ivil/TradingSystemBasedOnBlockchain
```

2、依赖安装

```sh
//后台管理
cd ./admin
yarn(或者npm install)(依赖安装)
yarn start(运行)

//客户端
cd ./client
yarn(或者npm install)(依赖安装)
yarn serve(运行)

//服务端
cd ./server
go mod tidy(依赖安装)
go run ./main.go(运行前请先启动并配置好数据库)
```

### 文件目录说明

<details>
  <summary>目录结构</summary>
  <pre><code>
  TradingSystemBasedOnBlockchain
├── LICENSE
├── README.md
├── admin
│   ├── README.md
│   ├── config-overrides.js
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src
│   │   ├── assets
│   │   │   └── thumb_1680_0_20211201092822365.jpg
│   │   ├── axios
│   │   │   ├── api.ts
│   │   │   ├── business
│   │   │   │   └── contract.api.ts
│   │   │   └── config
│   │   │       ├── axios.config.ts
│   │   │       └── axios.net.ts
│   │   ├── components
│   │   │   ├── Loading
│   │   │   │   ├── Loading.css
│   │   │   │   └── Loading.tsx
│   │   │   └── Navigation
│   │   │       ├── Navigation.css
│   │   │       └── Navigation.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── logo.svg
│   │   ├── pages
│   │   │   ├── admin
│   │   │   │   ├── contract.css
│   │   │   │   ├── contract.tsx
│   │   │   │   ├── energy.css
│   │   │   │   └── energy.tsx
│   │   │   └── home
│   │   │       ├── home.css
│   │   │       └── home.tsx
│   │   ├── react-app-env.d.ts
│   │   ├── redux
│   │   │   ├── action
│   │   │   │   └── number.ts
│   │   │   ├── index.ts
│   │   │   └── reducer
│   │   │       └── number.ts
│   │   ├── reportWebVitals.ts
│   │   ├── router
│   │   │   └── index.tsx
│   │   ├── setupTests.ts
│   │   ├── types
│   │   │   └── ethereum.d.ts
│   │   ├── utils
│   │   │   └── loading.ts
│   │   └── web3
│   │       ├── api
│   │       │   ├── admin.api.ts
│   │       │   ├── common.api.ts
│   │       │   ├── market.api.ts
│   │       │   └── user.api.ts
│   │       ├── config
│   │       │   ├── adminAccount.ts
│   │       │   └── contract.abi.ts
│   │       └── scripts
│   │           ├── Migrate.ts
│   │           └── autoCreateDemo.ts
│   ├── tsconfig.json
│   └── yarn.lock
├── client
│   ├── README.md
│   ├── babel.config.js
│   ├── package.json
│   ├── public
│   │   ├── display
│   │   │   ├── css
│   │   │   │   └── app.css
│   │   │   ├── data
│   │   │   │   ├── count-data.json
│   │   │   │   ├── csrc-industry.json
│   │   │   │   ├── month-count.json
│   │   │   │   ├── ranking-list.json
│   │   │   │   └── region-count.json
│   │   │   ├── img
│   │   │   │   ├── bg.png
│   │   │   │   ├── footer.png
│   │   │   │   ├── header.png
│   │   │   │   ├── icon-01.png
│   │   │   │   ├── icon-02.png
│   │   │   │   ├── icon-03.png
│   │   │   │   ├── icon-04.png
│   │   │   │   ├── icon-05.png
│   │   │   │   ├── icon-06.png
│   │   │   │   ├── icon-07.png
│   │   │   │   ├── icon-bg.png
│   │   │   │   └── thumb.jpg
│   │   │   ├── index.html
│   │   │   └── js
│   │   │       ├── countUp.min.js
│   │   │       ├── echarts-map-china.js
│   │   │       ├── echarts-theme-shine.js
│   │   │       ├── echarts.min.js
│   │   │       └── jquery-3.3.1.min.js
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src
│   │   ├── App.vue
│   │   ├── assets
│   │   │   ├── images
│   │   │   │   ├── 1651680126524.jpg
│   │   │   │   ├── accountCode.png
│   │   │   │   ├── bg.jpg
│   │   │   │   ├── block.png
│   │   │   │   ├── okex.png
│   │   │   │   └── okex1.png
│   │   │   ├── logo
│   │   │   │   ├── ivil.world.png
│   │   │   │   └── logo.png
│   │   │   ├── logo.png
│   │   │   └── reset.css
│   │   ├── axios
│   │   │   ├── api.ts
│   │   │   ├── business
│   │   │   │   └── user.api.ts
│   │   │   ├── common
│   │   │   │   └── common.api.ts
│   │   │   ├── config
│   │   │   │   ├── axios.config.ts
│   │   │   │   └── axios.net.ts
│   │   │   └── types
│   │   │       └── user.d.ts
│   │   ├── components
│   │   │   ├── Navigation.vue
│   │   │   └── NotFound.vue
│   │   ├── main.ts
│   │   ├── router
│   │   │   ├── dealRouter.ts
│   │   │   ├── index.ts
│   │   │   └── userRouter.ts
│   │   ├── shims-vue.d.ts
│   │   ├── store
│   │   │   └── index.ts
│   │   ├── types
│   │   │   ├── type.d.ts
│   │   │   └── web3.d.ts
│   │   ├── utils
│   │   │   ├── introduction.ts
│   │   │   ├── k-curve.ts
│   │   │   └── pie-chart.ts
│   │   ├── views
│   │   │   ├── deal
│   │   │   │   ├── BlockInfo.vue
│   │   │   │   └── MarketPlace.vue
│   │   │   ├── home
│   │   │   │   └── HomePage.vue
│   │   │   └── user
│   │   │       ├── MyWealth.vue
│   │   │       ├── SignIn.vue
│   │   │       └── SignUp.vue
│   │   └── web3
│   │       ├── api
│   │       │   ├── admin.api.ts
│   │       │   ├── common.api.ts
│   │       │   ├── market.api.ts
│   │       │   └── user.api.ts
│   │       └── config
│   │           └── contract.abi.ts
│   ├── tsconfig.json
│   ├── vue.config.js
│   └── yarn.lock
├── git_push.bat
├── server
│   ├── config
│   │   └── config.go
│   ├── controller
│   │   ├── contract.go
│   │   └── user.go
│   ├── dao
│   │   ├── mysql
│   │   │   └── mysql.go
│   │   ├── readme.md
│   │   └── redis
│   │       └── redis.go
│   ├── go.mod
│   ├── go.sum
│   ├── logic
│   │   └── user.go
│   ├── main.go
│   ├── middleware
│   │   └── cors.go
│   ├── model
│   │   ├── contract.go
│   │   └── user.go
│   └── router
│       ├── contract.go
│       ├── router.go
│       └── user.go
├── smart_contract
│   ├── LICENSE
│   ├── README.md
│   ├── backup
│   │   └── TradingSystem_copy.sol
│   ├── build
│   │   └── contracts
│   │       ├── Context.json
│   │       ├── ERC20.json
│   │       ├── IERC20.json
│   │       ├── IERC20Metadata.json
│   │       ├── IvilWorld.json
│   │       ├── Migrations.json
│   │       ├── SafeMath.json
│   │       ├── StringUtils.json
│   │       ├── TokenERC20.json
│   │       └── TradingSystem.json
│   ├── contracts
│   │   ├── Migrations.sol
│   │   └── TradingSystem.sol
│   ├── migrations
│   │   ├── 1_initial_migration.js
│   │   └── 2_deploy_contracts.js
│   ├── test
│   └── truffle-config.js
└── tree.md
  </code></pre>
</details>

### 软件架构 

![](./static(readme)/1.png)

### 部署

![](./static(readme)/2.png)



![](./static(readme)/3.png)



数据库中的合约表就两个字段，服务端主要作用就是将后台管理生成的合约地址传给客户端

![](./static(readme)/4.png)

请根据个人情况修改服务端的数据库配置

![](./static(readme)/5.png)

### 使用到的框架

- [react](https://create-react-app.dev/docs/getting-started/)(前端开发框架)
- [vue3](https://v3.cn.vuejs.org/guide/introduction.html)(前端开发框架)
- [truffle](https://trufflesuite.com/)(以太坊智能合约开发框架)
- [gin](https://gin-gonic.com/)(go web开发框架)
- [ethereumjs-tx](https://github.com/ethereumjs/ethereumjs-tx)(交易构建工具)
- [web3.js](https://learnblockchain.cn/docs/web3.js/)(一组使用HTTP或IPC连接来和本地或远程以太坊节点进行交互的库)

### 贡献者

[ivil](https://github.com/ivil)

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

30706616@qq.com

个人网站：https://ivil.world  &ensp; QQ: 30706616

 *您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/shaojintian/Best_README_template/blob/master/LICENSE.txt)

### 鸣谢

:heart:CUMT
