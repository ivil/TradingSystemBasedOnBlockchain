// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/// @title 委托投票
contract Ballot {
    // 用来表示一个选民
    struct Voter {
        uint256 weight; //计票的权重
        bool voted; //若为真，代表该人已投票
        address delegate; //被委托人
        uint256 vote; //投票提案的索引，把票投给了谁
    }
    // 提案，建议
    struct Proposal {
        bytes32 name; //简称（最长32个字节）
        uint256 voteCount; //得票数
    }
    address public chairperson; //主席

    //声明一个状态变量，为每个可能的地址存储一个'Voter';
    mapping(address => Voter) public voters;

    //一个'Proposal' 结构类型的动态数组；里面存储提案;
    Proposal[] public proposals;

    // 状态变量（在函数之外声明的变量）默认为“storage”形式，并永久写入区块链；而在函数内部声明的变量默认是“memory”型的，它们函数调用结束后消失。
    // 为'ProposalNames'中的每个提案，创建一个新的（投票）表决
    constructor(bytes32[] memory proposalsNames) {
        //一个合约的msg.sender是当前与合约交互的地址，可以是用户也可以是另一个合约;
        // msg.sender是合约所有者；构造函数在合约部署时执行，因此此时的msg.sender是合约所有者；
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        // 对于提供的每个提案名称，
        // 创建一个新的 Proposal 对象并把它添加到数组的末尾，
        for (uint256 i = 0; i < proposalsNames.length; i++) {
            proposals.push(Proposal({name: proposalsNames[i], voteCount: 0}));
        }
    }

    // 授权'Voter'投票权重；
    // 只有'chairperson'可以调用该函数；
    function giveRightToVote(address voter) public {
        // 若'require'的第一个参数的计算结果为'false'；
        // 则终止执行，撤销所有对状态和以太坊余额的改动；
        // 在旧版的EVM中这曾经会消耗所有gas，但现在不会了；
        // 使用require来检查函数是否被正确地调用，是一个好习惯；
        // 也可以在require的第二个参数中提供一个对错误情况的解释；
        require(
            msg.sender == chairperson,
            "Only chairperson can give right to vote."
        );
        require(!voters[voter].voted, "The voter already voted.");
        require(voters[voter].weight == 0);
        voters[voter].weight = 1;
    }

    // 把你的投票委托到投票者'to',
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You already voted.");
        require(
            to != msg.sender,
            // 不允许闭环委托
            "Found loop in delegation."
        );

        sender.voted = true; //关闭委托人投票权限；
        sender.delegate = to;
        Voter storage delegate_ = voters[to]; //被委托人地址
        if (delegate_.voted) {
            // 若被委托者已经投过票了，直接增加得票数；
            proposals[delegate_.vote].voteCount += sender.weight;
        } else {
            // 若被委托者还没投票，增加委托者的权重；
            delegate_.weight += sender.weight;
        }
    }

    // 把你的票，包括委托给你的票，投给提案，'proposals[proposal].name'
    // 投给提案
    function vote(uint256 proposal) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "Already voted.");
        sender.voted = true;
        sender.vote = proposal; //把票投给proposal；
        // 如果proposal超过了数组的范围，则会自动抛出异常，并恢复所有改动;
        proposals[proposal].voteCount += sender.weight;
    }

    // 结合之前的投票，计算出最终胜出的提案；
    function weinningProposal() public view returns (uint256 winningProposal_) {
        uint256 winningVoteCount = 0;
        for (uint256 p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    // 获取获胜者的名字
    function winnerName() public view returns (bytes32 winnerName_) {
        winnerName_ = proposals[weinningProposal()].name;
    }
}
