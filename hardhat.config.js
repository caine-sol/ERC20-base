require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      { version: "0.6.12" },
      { version: "0.8.7" },
      { version: "0.8.20" }, // Add other versions if needed
    ],
  },
  networks: {
    // for mainnet
    // 'base-mainnet': {
    //   url: 'https://mainnet.base.org',
    //   accounts: [process.env.WALLET_KEY],
    //   gasPrice: 1000000000,
    // },
    // for testnet
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [process.env.WALLET_KEY],
      gasPrice: 1000000000,
    },
    // for local dev environment
    // 'base-local': {
    //   url: 'http://localhost:8545',
    //   accounts: [process.env.WALLET_KEY],
    //   gasPrice: 1000000000,
    // },
  },
  defaultNetwork: "hardhat",
};
