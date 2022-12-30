// const main = async () => {
//   const [owner, randomPerson] = await hre.ethers.getSigners(); // creating the owner, random address by hardhat
//   const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compile the contract
//   const waveContract = await waveContractFactory.deploy(); // deploy
//   await waveContract.deployed();

//   console.log("Contract deployed to", waveContract.address); // debug to show the address where in the local blockchain
//   console.log("Contract deployed by", owner.address); 

//   await waveContract.getTotalWaves(); // test totalwaves 

//   const firstwaveTxn = await waveContract.wave(); // test waving 
//   await firstwaveTxn.wait();

//   await waveContract.getTotalWaves();

//   const secondWaveTxn = await waveContract.connect(randomPerson).wave(); // test randomperson wave
//   await secondWaveTxn.wait();

//   await waveContract.getTotalWaves();
// }

const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();  // imitate others wave
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compile
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed(); // deploy

  console.log("Contract deployed to:", waveContract.address); // test address
  console.log("Contract deployed by:", owner.address);

  await waveContract.getTotalWaves(); // start to test function

  const waveTxn = await waveContract.wave();
  await waveTxn.wait();

  await waveContract.getTotalWaves();

  await waveContract.connect(randomPerson).wave();

  await waveContract.getTotalWaves();
}

// catch exceptions
const runMain = async () => { 
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();