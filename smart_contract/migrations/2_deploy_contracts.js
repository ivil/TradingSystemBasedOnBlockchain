const Owner = artifacts.require('Owner')
const Ballot = artifacts.require('Ballot')
const Storage = artifacts.require("Storage")
const Market = artifacts.require("Market")
module.exports = function (deployer) {
    deployer.deploy(Owner);
    deployer.deploy(Ballot, [
        "0x0000000000000000000000000000000000000000000000000000000000000000",
        "0x0000000000000000000000000000000000000000000000000000000000000001",
        "0x0000000000000000000000000000000000000000000000000000000000000002",
        "0x0000000000000000000000000000000000000000000000000000000000000003"
    ]);
    deployer.deploy(Storage);
    deployer.deploy(Market)
};