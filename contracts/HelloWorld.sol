// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract HelloWorld {
    uint256 public number;

    constructor() {}

    // store a unsigned integer number
    function storeNumber(uint256 _number) public {
        number = _number;
    }

    // retrieve the number
    function retrieveNumber() public view returns (uint256) {
        return number;
    }
}
