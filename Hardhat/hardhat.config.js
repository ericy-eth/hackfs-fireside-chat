require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.12",
  networks:{
    rinkeby:{
      url: process.env.RINKEBY_RPC_URL,
      accounts:[process.env.PRIVATE_KEY]
    },
    polygon:{
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
