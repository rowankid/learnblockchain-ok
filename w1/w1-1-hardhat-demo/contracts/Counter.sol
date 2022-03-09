// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

import "hardhat/console.sol";

contract Counter {
    uint public counter;

    constructor() {
        counter = 0;
    }

    function count() public {
        counter = counter + 1;
        console.log("curr counter:", counter);
    }


    function set(uint x) public {
        counter = counter + x;
    }
}