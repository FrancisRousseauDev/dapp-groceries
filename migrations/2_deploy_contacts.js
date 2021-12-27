const GroceryToken = artifacts.require("GroceryToken");

module.exports = function(deployer) {
    deployer.deploy(GroceryToken);
};
