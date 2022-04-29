// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.24;

import "./ERC20.sol";

contract TradingSystem_test is ERC20 {
    address private root; //超级管理员
    address[] private administrtors; //普通管理员

    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        root = msg.sender;
    }
}
