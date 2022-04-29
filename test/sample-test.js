const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Ballot = await hre.ethers.getContractFactory("Ballot");
    const ballot = await Ballot.deploy(["0x7465737400000000000000000000000000000000000000000000000000000000"]);

    await ballot.deployed();

    console.log("ballot deployed to:", ballot.address);
  });
});
