const TradingSystem = artifacts.require("TradingSystem")
module.exports = function (deployer) {
    deployer.deploy(TradingSystem)
};