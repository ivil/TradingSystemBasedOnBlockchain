// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.24 ;

import "./ERC20.sol";

contract TradingSystem is ERC20{

  address private administrator;
  
  constructor (string memory name,string memory symbol) ERC20(name,symbol){
    administrator = msg.sender;
  }
}