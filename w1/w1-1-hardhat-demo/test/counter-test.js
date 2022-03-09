const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    // constructor
    const counter = await Counter.deploy(10);
    await counter.deployed();
    expect(await counter.counter()).to.equal(10);

    // count
    const countTx = await counter.count();
    // wait until the transaction is mined
    await countTx.wait();
    expect(await counter.counter()).to.equal(11);

    // set
    const setTx = await counter.set(30);
    // wait until the transaction is mined
    await setTx.wait();
    expect(await counter.counter()).to.equal(41);
  });
});
