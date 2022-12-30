// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
  uint256 totalWaves; // state variable

  constructor() {
    console.log("Yo yo, I am initialized ~~~");
  }

  function wave() public {
    totalWaves += 1;
    console.log("%s has waved!", msg.sender); //address called the function
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("We have %d total waves.", totalWaves);
    return totalWaves;
  }
}
