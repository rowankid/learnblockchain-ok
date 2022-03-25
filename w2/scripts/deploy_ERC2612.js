const { artifacts, network } = require("hardhat");
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const ERC2612 = await hre.ethers.getContractFactory("ERC2612");
  const erc2612 = await ERC2612.deploy(20);
  await erc2612.deployed();
  console.log("ERC2612 deployed to:", erc2612.address);


  let Artifact = await artifacts.readArtifact("ERC2612");
  await writeAbiaddr(Artifact,erc2612.address,"ERC2612",network.name);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });