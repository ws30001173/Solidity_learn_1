// local network keeps alive
const main = async () => {
  const [deployer] = await hre.ethers.getSigners(); //get deployer
  const accountBalance = await deployer.getBalance(); // get deployer balance

  console.log("Deploying contracts by account: ", deployer.address); // test both
  console.log("Account balance: ", accountBalance.toString());

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