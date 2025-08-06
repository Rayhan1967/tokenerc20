const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.utils.parseUnits("1000", 18); // 1000 MTK
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(initialSupply);

  await myToken.deployed();
  console.log(`MyToken deployed to: ${myToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
