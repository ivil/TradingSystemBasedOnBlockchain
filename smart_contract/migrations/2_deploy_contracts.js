// const SafeMath = artifacts.require("SafeMath")
// const StringUtils = artifacts.require("StringUtils")
const IERC20 = artifacts.require("IERC20")
const ERC20 = artifacts.require("ERC20")
const IvilWorld = artifacts.require("IvilWorld")
const TradingSystem = artifacts.require("TradingSystem")


module.exports = function (deployer) {
    // deployer.deploy(SafeMath)
    // deployer.deploy(StringUtils)
    // deployer.deploy(IERC20)
    // deployer.deploy(ERC20)
    // deployer.deploy(IvilWorld)
    // deployer.link(SafeMath,StringUtils,IERC20,ERC20,IvilWorld,TradingSystem)
    deployer.deploy(TradingSystem)
};