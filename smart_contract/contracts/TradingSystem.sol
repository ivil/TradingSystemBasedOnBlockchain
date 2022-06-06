// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.24;

/**
 * @title 安全数学运算
 * @dev 具有可在错误时恢复的安全检查的数学运算
 */
library SafeMath {
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        require(c / a == b);
        return c;
    }
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0);
        uint256 c = a / b;
        return c;
    }
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a);
        uint256 c = a - b;
        return c;
    }
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a);
        return c;
    }
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b != 0);
        return a % b;
    }
}

/**
 *@dev 字符串工具类,比较两个字符串是否相同
 */
library StringUtils {
    function CompareInternal(string memory a, string memory b)
        internal
        pure
        returns (bool)
    {
        if (bytes(a).length != bytes(b).length) {
            return false;
        }
        for (uint256 i = 0; i < bytes(a).length; i++) {
            if (bytes(a)[i] != bytes(b)[i]) {
                return false;
            }
        }
        return true;
    }
}

//========================================================================================

/**
 * @title ERC20 interface
 */
interface IERC20 {
    // methods
    function totalSupply() external view returns (uint256);
    function balanceOf(address who) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function transfer(address to, uint256 value) external returns (bool);
    function approve(address spender, uint256 value) external returns (bool);
    function transferFrom(address from,address to,uint256 value) external returns (bool);
    // event
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner,address indexed spender, uint256 value);
}

//=======================================================================================
/**
 * @title 标准ERC20通证
 *
 */
contract ERC20 is IERC20 {
    using SafeMath for uint256;

    string private _name = "ivil.world"; //通证名称
    string private _symbol = "IVIL"; //通证符号
    uint8 private _decimals = 0; //小数位数，可拆分的最小单位
    uint256 private _totalSupply = 21000000; //积分总量

    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowed;

    address private root; //超级管理员

    constructor() {
        root = msg.sender;
        _balances[msg.sender] = _balances[msg.sender].add(_totalSupply);
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    // 铸造生态积分
    function createIVIL(uint256 value) public returns (bool) {
        require(msg.sender == root, "Only the root can create token!");
        _balances[msg.sender] = _balances[msg.sender].add(value);
        _totalSupply = _totalSupply.add(value);
        return true;
    }

    // 销毁生态积分
    function destoryIVIL(uint256 value) public returns (bool) {
        require(msg.sender == root, "Only the root can destory token!");
        require(_balances[msg.sender] >= value, "Insufficient balance !");
        _balances[msg.sender] = _balances[msg.sender].sub(value);
        _totalSupply = _totalSupply.sub(value);
        return true;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address owner) public view returns (uint256) {
        return _balances[owner];
    }

    function allowance(address owner, address spender)
        public
        view
        returns (uint256)
    {
        return _allowed[owner][spender];
    }

    function transfer(address to, uint256 value) public returns (bool) {
        require(value <= _balances[msg.sender]);
        require(to != address(0));

        _balances[msg.sender] = _balances[msg.sender].sub(value);
        _balances[to] = _balances[to].add(value);
        emit Transfer(msg.sender, to, value);
        return true;
    }

    function approve(address spender, uint256 value) public returns (bool) {
        require(spender != address(0));

        _allowed[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) public returns (bool) {
        require(value <= _balances[from]);
        require(value <= _allowed[from][msg.sender]);
        require(to != address(0));

        _balances[from] = _balances[from].sub(value);
        _balances[to] = _balances[to].add(value);
        _allowed[from][msg.sender] = _allowed[from][msg.sender].sub(value);
        emit Transfer(from, to, value);
        return true;
    }
}

//===================================================================================

contract IvilWorld is ERC20 {
    using SafeMath for uint256;
    using StringUtils for string;

    struct Token {
        string name; //通证名称
        string symbol; //通证符号
        uint8 decimals; //通证小数位数，代币最小单位，2可以表示我们可以拥有0.01个代币
        uint256 totalSupply; //通证总量
    }

    address private ice; //掌管被冻结的财产
    address private root; //超级管理员

    mapping(address => mapping(string => uint256)) private balance; //通证余额

    Token[] private tokens;
    /*
     *constant 修饰的变量需要在编译期确定值, 链上不会为这个变量分配存储空间, 它会在编译时用具体的值替代, 因此, constant常量是不支持使用运行时状态赋值的(例如: block.number , now , msg.sender 等 )
     *constant 目前仅支持修饰 strings 及 值类型.
     */
    Token private godToken = Token("ivil.world", "ENERGY", 9, 21000000); // 创世token,生态积分

    constructor() {
        root = msg.sender;
        tokens.push(godToken);
        balance[msg.sender][godToken.symbol] = balance[msg.sender][
            godToken.symbol
        ].add(godToken.totalSupply);
    }

    // 铸造通证
    function createToken(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 total
    ) public returns (Token[] memory) {
        require(msg.sender == root, "Only root can create the token !");
        bool status = false;
        for (uint256 i = 0; i < tokens.length; i++) {
            if (
                tokens[i].name.CompareInternal(name) ||
                tokens[i].symbol.CompareInternal(symbol)
            ) {
                require(
                    status,
                    "failed to create token ! The name or symbol has already existed !"
                );
                return tokens;
            }
        }
        Token memory token = Token(name, symbol, decimals, total);
        tokens.push(token);
        balance[msg.sender][token.symbol] = balance[msg.sender][token.symbol]
            .add(token.totalSupply);
        return tokens;
    }

    // 销毁通证
    function destoryToken(string memory symbol)
        public
        returns (Token[] memory)
    {
        require(msg.sender == root, "Only root can create the token !");
        require(
            !symbol.CompareInternal("IVIL"),
            "The IVIL is can't be destoryed !"
        );
        bool status = false;
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i].symbol.CompareInternal(symbol)) {
                delete tokens[i];
                while (i + 1 < tokens.length) {
                    tokens[i] = tokens[i + 1];
                    i++;
                }
                Token[] memory temp;
                temp = tokens;
                delete tokens;
                for (uint256 k = 0; k < temp.length - 1; k++) {
                    tokens.push(temp[k]);
                }
                return tokens;
            }
        }
        require(status, "failed to delete !");
        return tokens;
    }

    // 增发指定token
    function increaseToken(string memory symbol, uint256 value) public {
        require(msg.sender == root, "Only root can add the token !");
        (uint256 index, ) = getLocationOfToken(symbol);
        // require(isExisted, "The token is not existed !");
        tokens[index].totalSupply = tokens[index].totalSupply.add(value);
        balance[msg.sender][symbol] = balance[msg.sender][symbol].add(value);
    }

    // 销毁部分指定token
    function decreaseToken(string memory symbol, uint256 value) public {
        require(msg.sender == root, "Only root can add the token !");
        (uint256 index, ) = getLocationOfToken(symbol);
        // require(isExisted, "The token is not existed !");
        require(balance[msg.sender][symbol] >= value, "Insufficient balance !");
        tokens[index].totalSupply = tokens[index].totalSupply.sub(value);
        balance[msg.sender][symbol] = balance[msg.sender][symbol].sub(value);
    }

    // 根据代币符号定位token
    function getLocationOfToken(string memory symbol)
        internal
        view
        returns (uint256, bool)
    {
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i].symbol.CompareInternal(symbol)) {
                return (i, true);
            }
        }
        require(false, "The token was not found !");
        return (0, false);
    }

    // 获取所有通证信息
    function getAllTokensInfo() public view returns (Token[] memory) {
        return tokens;
    }

    // 获取指定地址单个通证余额
    function getTokenBalance(string memory symbol, address who)
        public
        view
        returns (uint256)
    {
        getLocationOfToken(symbol);
        return balance[who][symbol];
    }

    // 转账
    function transferToken(
        string memory symbol,
        address to,
        uint256 value
    ) public returns (bool) {
        getLocationOfToken(symbol);
        // require(isExisted, "The token is not existed");
        require(
            value <= getTokenBalance(symbol, msg.sender),
            "The token is not enough !"
        );
        require(to != address(0));
        balance[msg.sender][symbol] = balance[msg.sender][symbol].sub(value);
        balance[to][symbol] = balance[to][symbol].add(value);
        emit Transfer(msg.sender, to, value);
        return true;
    }

    // 冻结token
    function freezeToken(string memory symbol, uint256 value)
        internal
        returns (bool)
    {
        getLocationOfToken(symbol);
        // require(isExisted, "The token is not existed");
        require(
            value <= getTokenBalance(symbol, msg.sender),
            "The token is not enough !"
        );
        balance[msg.sender][symbol] = balance[msg.sender][symbol].sub(value);
        balance[ice][symbol] = balance[ice][symbol].add(value);
        emit Transfer(msg.sender, ice, value);
        return true;
    }

    // 解冻token
    function unfreezeToken(string memory symbol, uint256 value)
        internal
        returns (bool)
    {
        getLocationOfToken(symbol);
        // require(isExisted, "The token is not existed");
        balance[ice][symbol] = balance[ice][symbol].sub(value);
        balance[msg.sender][symbol] = balance[msg.sender][symbol].add(value);
        emit Transfer(ice, msg.sender, value);
        return true;
    }
}

// ===========================================================================

contract TradingSystem is IvilWorld {
    using SafeMath for uint256;
    // using StringUtils for string;

    struct Transaction {
        address sender; //需求发布者
        string symbol; //能源类型
        uint256 value; //能源数量
        uint256 price; //价格
        bool status; //交易状态，是否成功
        uint256 index; //交易流水号
    }
    // mapping(uint256 => Transaction) private tradingPool; //交易池，包含所有交易
    Transaction[] private tradingPool;
    // Transaction[] private transactions; //用于存放池中未完成的交易
    mapping(address => Transaction[]) personalPool; //个人交易记录列表

    uint256 private counter = 0;

    address private root; //超级管理员

    constructor() {
        root = msg.sender;
    }

    // 获取当前交易池深度
    function depthOfPool() public view returns (uint256) {
        return counter;
    }

    // 获取当前交易池中的所有交易
    function transactionsOfPool() public view returns (Transaction[] memory) {
        return tradingPool;
    }

    // 获取个人交易记录
    function getPersonalPool() public view returns (Transaction[] memory) {
        return personalPool[msg.sender];
    }

    // 根据序列号查个人交易记录中的交易
    function getDealFromPersonalPool(uint256 index, address who)
        internal
        view
        returns (uint256, bool)
    {
        for (uint256 i; i < personalPool[who].length; i++) {
            if (personalPool[who][i].index == index) {
                return (i, true);
            }
        }
        require(false, "The transaction is not existed !");
        return (0, false);
    }

    // 发布
    function sell(string memory symbol, uint256 value, uint256 price) public {
        getLocationOfToken(symbol);
        require(value <= getTokenBalance(symbol, msg.sender), "The token is not enough !");
        Transaction memory deal = Transaction(msg.sender,symbol,value,price,false,counter); //counter:从0开始计数
        tradingPool.push(deal);
        personalPool[msg.sender].push(deal);
        freezeToken(symbol, value);
        counter++;
    }
    // 取消发布
    function cancelSell(uint256 index) public {
        require(index <= counter, "The transaction is not existed !");
        require(tradingPool[index].status == false,"The transaction has already been completed !");
        require(msg.sender == tradingPool[index].sender);
        unfreezeToken(tradingPool[index].symbol, tradingPool[index].value);
        tradingPool[index].status = true;
        (uint256 i, ) = getDealFromPersonalPool(index, msg.sender);
        personalPool[msg.sender][i].status = true;
    }
    // 响应
    function buy(uint256 index) public {
        require(tradingPool[index].sender != msg.sender,"You can not buy your product !");
        require(index <= counter, "The transaction is not existed !");
        require(tradingPool[index].status == false,"The transaction has already been completed !");
        transfer(tradingPool[index].sender, tradingPool[index].price);
        unfreezeToken(tradingPool[index].symbol, tradingPool[index].value);
        tradingPool[index].status = true;
        personalPool[msg.sender].push(tradingPool[index]);
        // 更新发布者的交易记录
        (uint256 i, ) = getDealFromPersonalPool(index, tradingPool[index].sender);
        personalPool[tradingPool[index].sender][i].status = true;
    }
}
