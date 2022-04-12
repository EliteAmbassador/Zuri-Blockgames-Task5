require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
    url: "https://rinkeby.infura.io/v3/33c4d28d39f54b409d7fe4e7dba1cae8",
    accounts: ["0a722eaed55307f0daee9a91f240af253624d2a55bde27e1fdc154315b194981"],
  },
},
}
