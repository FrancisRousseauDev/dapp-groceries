const GroceryToken = artifacts.require("./GroceryToken.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('GroceryToken', (accounts) => {
    it('should put 10000 GroceryCoins in the first account', async () => {
        const groceryInstance = await GroceryToken.deployed();
        const balance = await groceryInstance.getBalance.call(accounts[0]);

        assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
    });
})
