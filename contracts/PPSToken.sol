// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PPSToken is ERC20 {
    constructor() ERC20("PPSToken", "PPS") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
