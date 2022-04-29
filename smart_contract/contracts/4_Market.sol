// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Market {
    // token
    struct Token {
        string name;
        uint256 count;
    }
    // 给每个可能的地址存储一个token
    mapping(address => Token) public tokens;
    
    struct Product {
        string name;
        uint256 price;
        uint256 count;
        string description;
        // string seller;
    }
    // 在售商品列表
    Product[] productList;

    // 需求发布
    function onShelf(Product memory product) public {
        productList.push(product);
    }

    // 获取在售商品列表
    function getProductList() public view returns (Product[] memory) {
        return productList;
    }

    // 需求响应
    function offShelf(uint256 id) public returns (Product[] memory) {
        delete productList[id];
        return productList;
    }
}
