// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.24;

import "./IERC20.sol";
import "./SafeMath.sol";

/**
 * @title Standard ERC20 token
 *
 * @dev Implementation of the basic standard token.
 * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md
 * Originally based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol
 */
contract ERC20 is IERC20 {
    // using A for B
    // 可用于在合约的上下文中，将库函数（来自库A）附加到任何类型（B）
    // 这些函数将接收被调用的对象作为它们的第一个参数
    // using A for *——库A的功能可以附加到任何类型。
    // 附加库中的所有函数，即使那些第一个参数的类型与对象的类型不匹配的函数也是如此。
    // 在调用函数时检查类型，并执行函数重载解析。
    // 指令仅在当前合约内（包括其所有功能内）有效，并且在使用该合约的合约外无效。
    using SafeMath for uint256;

    string private _name; //代币名称
    string private _symbol; //代币符号

    address private root; //超级管理员

    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowed;

    uint256 private _totalSupply = 21000000; //代币总量

    constructor(string memory name, string memory symbol) {
        _name = name;
        _symbol = symbol;
        root = msg.sender;
        _balances[root] = _totalSupply;
    }

    // 获取代币名称
    function getTokenName() public view returns (string memory) {
        return _name;
    }

    // 修改代币名称
    function updateTokenName(string memory newName) public {
        require(msg.sender == root,"Only root can update the tokenName!");
        _name = newName;
    }

    // 获取代币符号
    function getTokenSymbol() public view returns (string memory) {
        return _symbol;
    }

    // 修改代币符号
    function updateTokenSymbol(string memory newSymbol)public{
        require(msg.sender==root,"Only root can update the tokenSymbol!");
        _symbol = newSymbol;
    }

    /**
     * @dev 获取代币总量
     */
    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev 查看对应账号的代币余额
     * @param owner The address to query the balance of.
     * @return An uint256 representing the amount owned by the passed address.
     */
    function balanceOf(address owner) public view returns (uint256) {
        return _balances[owner];
    }

    /**
     * @dev Function to check the amount of tokens that an owner allowed to a spender.
     * @dev 返回授权花费的代币数
     * @param owner address The address which owns the funds.
     * @param spender address The address which will spend the funds.
     * @return A uint256 specifying the amount of tokens still available for the spender.
     */
    function allowance(address owner, address spender)
        public
        view
        returns (uint256)
    {
        return _allowed[owner][spender];
    }

    /**
     * @dev 实现转账交易，用于给用户发送代币（从我们的账户里）
     * @dev Transfer token for a specified address
     * @param to The address to transfer to.
     * @param value The amount to be transferred.
     */
    function transfer(address to, uint256 value) public returns (bool) {
        require(value <= _balances[msg.sender]);
        require(to != address(0));

        _balances[msg.sender] = _balances[msg.sender].sub(value);
        _balances[to] = _balances[to].add(value);
        // add() 将接收被调用的对象作为他们第一个参数
        emit Transfer(msg.sender, to, value);
        return true;
    }

    // 创建通证
    function createToken(uint256 value) public returns (bool) {
        require(msg.sender == root,"Only the root can create token!");
        _balances[msg.sender] = _balances[msg.sender].add(value);
        _totalSupply = _totalSupply.add(value);
        return true;
    }

    // 销毁通证
    function destoryToken(uint256 value) public returns (bool) {
        require(msg.sender == root,"Only the root can destory token!");
        _balances[msg.sender] = _balances[msg.sender].sub(value);
        _totalSupply = _totalSupply.sub(value);
        return true;
    }

    /**
     * @dev 授权用户可代表我们花费的代币数
     * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.
     * Beware that changing an allowance with this method brings the risk that someone may use both the old
     * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this
     * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     * @param spender The address which will spend the funds.
     * @param value The amount of tokens to be spent.
     */
    function approve(address spender, uint256 value) public returns (bool) {
        require(spender != address(0));

        _allowed[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    /**
     * @dev 给被授权的用户使用，他可以从我们（参数from）的账户里发送代币给其他用户(参数to)
     * @dev Transfer tokens from one address to another
     * @param from address The address which you want to send tokens from
     * @param to address The address which you want to transfer to
     * @param value uint256 the amount of tokens to be transferred
     */
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

    /**
     * @dev Increase the amount of tokens that an owner allowed to a spender.(铸币)
     * approve should be called when allowed_[_spender] == 0. To increment
     * allowed value is better to use this function to avoid 2 calls (and wait until
     * the first transaction is mined)
     * From MonolithDAO Token.sol
     * @param spender The address which will spend the funds.
     * @param addedValue The amount of tokens to increase the allowance by.
     */
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

    /**
     * @dev Decrease the amount of tokens that an owner allowed to a spender.(销毁代币)
     * approve should be called when allowed_[_spender] == 0. To decrement
     * allowed value is better to use this function to avoid 2 calls (and wait until
     * the first transaction is mined)
     * From MonolithDAO Token.sol
     * @param spender The address which will spend the funds.
     * @param subtractedValue The amount of tokens to decrease the allowance by.
     */
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

    /**
     * @dev Internal function that mints an amount of the token and assigns it to
     * an account. This encapsulates the modification of balances such that the
     * proper events are emitted.
     * @param account The account that will receive the created tokens.
     * @param amount The amount that will be created.
     */
    function _mint(address account, uint256 amount) internal {
        require(account != address(0x0));
        _totalSupply = _totalSupply.add(amount);
        _balances[account] = _balances[account].add(amount);
        emit Transfer(address(0), account, amount);
    }

    /**
     * @dev Internal function that burns an amount of the token of a given
     * account.
     * @param account The account whose tokens will be burnt.
     * @param amount The amount that will be burnt.
     */
    function _burn(address account, uint256 amount) internal {
        require(account != address(0x0));
        require(amount <= _balances[account]);

        _totalSupply = _totalSupply.sub(amount);
        _balances[account] = _balances[account].sub(amount);
        emit Transfer(account, address(0), amount);
    }

    /**
     * @dev Internal function that burns an amount of the token of a given
     * account, deducting from the sender's allowance for said account. Uses the
     * internal burn function.
     * @param account The account whose tokens will be burnt.
     * @param amount The amount that will be burnt.
     */
    function _burnFrom(address account, uint256 amount) internal {
        require(amount <= _allowed[account][msg.sender]);

        // Should https://github.com/OpenZeppelin/zeppelin-solidity/issues/707 be accepted,
        // this function needs to emit an event with the updated approval.
        _allowed[account][msg.sender] = _allowed[account][msg.sender].sub(
            amount
        );
        _burn(account, amount);
    }
}
