// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

contract Bank {

    mapping(address => uint256) public balanceOf;

    // TODO 判断转入代币的token，分别计算每个token的余额。

    // 默认
    receive() external payable {
        deposit();
    }

    // 存款
    function deposit() public payable {
        balanceOf[msg.sender] += msg.value;
    }

    // 提取出所有的ETH
    function withdraw(uint256 value) public {
        require(balanceOf[msg.sender] >= value);
        balanceOf[msg.sender] -= value;
        payable(msg.sender).transfer(value);
    }

    function totalSupply() public view returns (uint256) {
        return address(this).balance;
    }
}
