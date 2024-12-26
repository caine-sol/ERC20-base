const hre = require("hardhat");

async function main() {
  try {
    // Get the contract factory
    const PPSToken = await hre.ethers.getContractFactory("PPSToken");

    // Deploy the contract
    console.log("Deploying PPSToken...");
    const ppsToken = await PPSToken.deploy();

    // Wait for the deployment transaction
    await ppsToken.waitForDeployment();

    // Get the contract address
    const contractAddress = await ppsToken.getAddress();
    console.log("PPSToken deployed to:", contractAddress);

    
    console.log("Contract deployed successfully");
  } catch (error) {
    console.error("Deployment failed:", error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });