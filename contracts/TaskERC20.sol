//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TaskERC20 is ERC20 {
    uint256 public rate;

    constructor() ERC20("TaskERC20", "TSK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function buyToken(address receiver) public payable {
        address receiver;
        //_balances[to] = _balances[to] + msg.value;
        //msg.value = 1 * 10 ** 18;
    }


}
