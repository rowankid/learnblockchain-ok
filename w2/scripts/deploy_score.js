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
  const Score = await hre.ethers.getContractFactory("Score");
  const score = await Score.deploy(20);
  await score.deployed();
  console.log("Score deployed to:", score.address);


  let Artifact = await artifacts.readArtifact("Score");
  await writeAbiaddr(Artifact,score.address,"Score",network.name);
  
  const Teacher = await hre.ethers.getContractFactory("Teacher");
  const teacher = await Teacher.deploy(20);
  await teacher.deployed();
  console.log("Teacher deployed to:", teacher.address);


  let Artifact = await artifacts.readArtifact("Teacher");
  await writeAbiaddr(Artifact,teacher.address,"Teacher",network.name);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });