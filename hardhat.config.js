require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const mnemonic = "{{mnemonic}}";
const privateKey = [""];

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    thaichain: {
      url: "https://rpc.tch.in.th",
      chainId: 7,
      gasPrice: 20 * 1e9,
      accounts: privateKey,
    },
    bitkub: {
      url: "https://rpc.bitkubchain.io",
      chainId: 96,
      gasPrice: 50 * 1e9,
      accounts: privateKey,
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20 * 1e9,
      accounts: privateKey,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 5 * 1e9,
      accounts: privateKey,
    },
  },
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "",
  },
};
