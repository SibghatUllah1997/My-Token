const MyTokenContract = artifacts.require("MyTokenContract");

module.exports = function (deployer) {
  deployer.deploy(MyTokenContract, 20000);
};
