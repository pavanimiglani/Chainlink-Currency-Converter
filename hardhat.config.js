
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/rQeYlvRBd5Pu_-zIMmgq1bnH8OAFMgqP", 
      accounts: ["64d66fc927c75aff55deb3875ac4c94fd21a9a7c97a9a0757ed7642cd038bf24"],
    }
  }
}
