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
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compile
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed(); // deploy

  console.log("Contract deployed to:", waveContract.address); // contract address

  let waveCount;  // start to test function
  waveCount = await waveContract.getTotalWaves();
  console.log(waveCount.toNumber());

  // send waves~
  const waveTxn = await waveContract.wave("A message!");
  await waveTxn.wait();

  const [_, randomPerson] = await hre.ethers.getSigners();
  wavetxn = await waveContract.connect(randomPerson).wave("Another message!");
  await waveTxn.wait();

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
};

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