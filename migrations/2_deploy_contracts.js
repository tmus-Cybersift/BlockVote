var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var ElectionController = artifacts.require("./ElectionController.sol");
var VoteTokenFactory = artifacts.require("./VoteTokenFactory.sol");
var DistrictFactory = artifacts.require("./DistrictFactory.sol");
var District = artifacts.require("./District.sol");
var Shared = artifacts.require("./Shared.sol");
var VoteToken = artifacts.require("./VoteToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(SimpleStorage);
  await deployer.deploy(Shared);
  //deployer.deploy(VoteToken);
  //cleadeployer.deploy(District);

  await deployer.link(Shared,ElectionController);
  await deployer.link(Shared,District);
 // deployer.link(VoteToken,Main);
 // deployer.link(District,Main);
  
  await deployer.deploy(VoteTokenFactory);
  await deployer.deploy(DistrictFactory);
  await deployer.deploy(ElectionController,13,DistrictFactory.address,VoteTokenFactory.address);




};
