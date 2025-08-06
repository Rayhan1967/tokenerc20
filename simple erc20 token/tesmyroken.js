const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let MyToken, myToken, owner, addr1;

  beforeEach(async () => {
    [owner, addr1] = await ethers.getSigners();
    MyToken = await ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy(ethers.utils.parseUnits("1000", 18));
    await myToken.deployed();
  });

  it("Should assign the total supply to the owner", async () => {
    const ownerBalance = await myToken.balanceOf(owner.address);
    expect(await myToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should allow the owner to mint tokens", async () => {
    await myToken.mint(addr1.address, 100);
    expect(await myToken.balanceOf(addr1.address)).to.equal(ethers.utils.parseUnits("100", 18));
  });

  it("Should allow burning tokens", async () => {
    await myToken.burn(100);
    const newSupply = await myToken.totalSupply();
    expect(newSupply).to.be.lt(ethers.utils.parseUnits("1000", 18));
  });
});