// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.24;

/**
 * @title 安全数学运算
 * @dev 具有可在错误时恢复的安全检查的数学运算
 */
library SafeMath {
    /**
     * @dev 将两个数字相乘，异常时恢复。
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b);

        return c;
    }

    /**
     * @dev 两数相除，异常时恢复
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b > 0);
        uint256 c = a / b;

        return c;
    }

    /**
     * @dev 两数相减，在溢出时恢复
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev 两数相加，出现异常时恢复
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a);

        return c;
    }

    /**
     * @dev 取模运算，异常时恢复
     */
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

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);

    // event
    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

//=======================================================================================
/**
 * @title 标准ERC20通证
 *
 */
contract ERC20 is IERC20 {
    using SafeMath for uint256;

    string private _name = "ivil.world"; //代币名称
    string private _symbol = "IVIL"; //代币符号
    uint8 private _decimals = 9; //小数位数，可拆分的最小单位
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

    function increaseAllowance(address spender, uint256 addedValue)
        public
        returns (bool)
    {
        require(spender != address(0));

        _allowed[msg.sender][spender] = (
            _allowed[msg.sender][spender].add(addedValue)
        );
        emit Approval(msg.sender, spender, _allowed[msg.sender][spender]);
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue)
        public
        returns (bool)
    {
        require(spender != address(0));

        _allowed[msg.sender][spender] = (
            _allowed[msg.sender][spender].sub(subtractedValue)
        );
        emit Approval(msg.sender, spender, _allowed[msg.sender][spender]);
        return true;
    }

    function _mint(address account, uint256 amount) internal {
        require(account != address(0));
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount);
    }

    function _burn(address account, uint256 amount) internal {
        require(account != address(0));
        require(amount <= _balances[account]);

        _totalSupply = _totalSupply.sub(amount);
        _balances[account] = _balances[account].sub(amount);
        emit Transfer(account, address(0), amount);
    }

    function _burnFrom(address account, uint256 amount) internal {
        require(amount <= _allowed[account][msg.sender]);

        _allowed[account][msg.sender] = _allowed[account][msg.sender].sub(
            amount
        );
        _burn(account, amount);
    }
}

//===================================================================================

contract TradingSystem is ERC20 {
    using SafeMath for uint256;
    using StringUtils for string;

    struct Token {
        string name; //代币名称
        string symbol; //代币符号
        uint8 decimals; //代币小数位数，代币最小单位，2可以表示我们可以拥有0.01个代币
        uint256 totalSupply; //代币总量
    }

    address private root; //超级管理员

    mapping(address => mapping(string => uint256)) private balance; //代币余额

    Token[] private tokens;
    /*
     *constant 修饰的变量需要在编译期确定值, 链上不会为这个变量分配存储空间, 它会在编译时用具体的值替代, 因此, constant常量是不支持使用运行时状态赋值的(例如: block.number , now , msg.sender 等 )
     *constant 目前仅支持修饰 strings 及 值类型.
     */
    Token private godToken = Token("ivil.world", "IVIL", 9, 21000000); // 创世token,生态积分

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
    function IncreaseToken(string memory symbol, uint256 value) public {
        require(msg.sender == root, "Only root can add the token !");
        (uint256 index, bool isExisted) = getLocationBySymbol(symbol);
        require(isExisted, "The token is not existed !");
        tokens[index].totalSupply = tokens[index].totalSupply.add(value);
        balance[msg.sender][symbol] = balance[msg.sender][symbol].add(value);
    }

    // 销毁部分指定token
    function decreaseToken(string memory symbol, uint256 value) public {
        require(msg.sender == root, "Only root can add the token !");
        (uint256 index, bool isExisted) = getLocationBySymbol(symbol);
        require(isExisted, "The token is not existed !");
        require(balance[msg.sender][symbol] >= value, "Insufficient balance !");
        tokens[index].totalSupply = tokens[index].totalSupply.sub(value);
        balance[msg.sender][symbol] = balance[msg.sender][symbol].sub(value);
    }

    // 根据代币符号定位token
    function getLocationBySymbol(string memory symbol)
        private
        view
        returns (uint256, bool)
    {
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i].symbol.CompareInternal(symbol)) {
                return (i, true);
            }
        }
        require(false, "The specified token was not found !");
        return (0, false);
    }

    // 获取指定token全部信息
    function getTokenInfo(string memory symbol)
        public
        view
        returns (Token memory)
    {
        (uint256 index, bool isExisted) = getLocationBySymbol(symbol);
        require(isExisted, " The token is not existed ! ");
        return tokens[index];
    }

    // 获取所有通证信息
    function getAllTokenInfo() public view returns (Token[] memory) {
        return tokens;
    }

    // 获取单个通证余额
    function getTokenBalance(string memory symbol)
        public
        view
        returns (uint256)
    {
        return balance[msg.sender][symbol];
    }

    // 转账
    function transferToken(
        string memory symbol,
        address to,
        uint256 value
    ) public returns (bool) {
        (, bool isExisted) = getLocationBySymbol(symbol);
        require(isExisted, "The token is not existed");
        require(value <= balanceOf(msg.sender), "Insufficient balance !");
        require(to != address(0));
        balance[msg.sender][symbol] = balance[msg.sender][symbol].sub(value);
        balance[to][symbol] = balance[to][symbol].add(value);
        emit Transfer(msg.sender, to, value);
        return true;
    }

}


