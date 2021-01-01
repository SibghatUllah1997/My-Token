// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

contract MyTokenContract {
    string public name = "Ethereum";
    string public symbol = "Eth";
    uint256 public totalSupply;

    event Transfer(address indexed from, address indexed to, uint256 _value);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 _value
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    function transfer(address to, uint256 value) public returns (bool success) {
        require(balanceOf[msg.sender] >= value);

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;

        emit Transfer(msg.sender, to, value);

        return true;
    }

    function approve(address spender, uint256 value)
        public
        returns (bool success)
    {
        allowance[msg.sender][spender] = value;

        Approval(msg.sender, spender, value);

        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 _value
    ) public returns (bool success) {
        require(_value <= balanceOf[from]);

        balanceOf[from] -= _value;
        balanceOf[to] += _value;

        allowance[from][msg.sender] -= _value;

        Transfer(from, to, _value);

        return true;
    }
}
