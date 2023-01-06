// local network keeps alive
const main = async () => {
  const [deployer] = await hre.ethers.getSigners(); //get deployer

  console.log("Deploying contracts by account: ", deployer.address); // test both

  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); // compile
  const waveContract = await waveContractFactory.deploy(); // deploy
  await waveContract.deployed(); 

  console.log("WavePortal address:", waveContract.address); // test deploy
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

runMain();