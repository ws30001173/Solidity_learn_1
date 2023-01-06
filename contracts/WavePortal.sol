// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

// current contract address: 0x842aa6bE6A16F36EbdF79BF2Bb18C5Edfe4a2215
contract WavePortal {
  uint256 totalWaves; // state variable

  constructor() {
    console.log("Yo yo, now I'm able now ~~~");
  }

  event NewWave(address indexed from, uint256 timestamp, string message);

  struct Wave {
    address waver; // address of the user waved
    string message; // message the user sent
    uint256 timestamp; // timestamp when user waved
  }

  Wave[] waves;

  function wave(string memory _message) public {
    totalWaves += 1;
    console.log("%s waved w/ message %s", msg.sender, _message);
    
    // this is where I actually store the wave data in the array.
    waves.push(Wave(msg.sender, _message, block.timestamp));

    // Fired to store updated data to the blockchain
    emit NewWave(msg.sender, block.timestamp, _message);
  }

  function getAllWaves() public view returns (Wave[] memory) {
    return waves;
  }

  function getTotalWaves() public view returns (uint256) {
    console.log("We have %d total waves.", totalWaves);
    return totalWaves;
  }
}
