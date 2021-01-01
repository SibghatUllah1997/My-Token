const router = require("express");
const bodyparser = require("body-parser");
const Web3 = require("web3");
const MyContract = require("../build/contracts/MyTokenContract.json");
const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();

exports.balanceOf = async (req, res) => {
    mnemonic = process.env.MNEMONICS
    infuraapi = process.env.INFURAPI
  const provider = new HDWalletProvider(
    mnemonic,
    infuraapi  );
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  const Contract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );

  const result = await Contract.methods
    .balanceOf(req.body.addressforBalance)
    .call();
  res.send(result);
};

// console.log(result);

exports.allowance = async (req, res) => {
  mnemonic = process.env.MNEMONICS
  infuraapi = process.env.INFURAPI

  const provider = new HDWalletProvider(
    mnemonic,
    infuraapi  );
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  const Contract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );
  const result = await await Contract.methods
    .allowance(req.body.owner, req.body.addressforAllowance)
    .call();
  console.log(result);
  res.send(result);
};
exports.totalSupply = async (req, res) => {
  mnemonic = process.env.MNEMONICS
  infuraapi = process.env.INFURAPI

  const provider = new HDWalletProvider(
    mnemonic,
    infuraapi  );
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  const Contract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );
  const result = await Contract.methods.totalSupply().call();
  console.log(result);
  res.send(result);
};

exports.transfer = async (req, res) => {
  mnemonic = process.env.MNEMONICS
  infuraapi = process.env.INFURAPI

  const provider = new HDWalletProvider(
    mnemonic,
    infuraapi  );
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  const Contract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );
  var acc = await web3.eth.getAccounts();
  // console.log(acc);
  const result = await await Contract.methods
    .transfer(req.body.address, req.body.amount)
    .send({ from: acc[0] });

  console.log(result);
  res.send(result);
  //     Contract.methods.transfer('0xd758a3cC64b6d9cEf00c314E95760E0cFc60De6B', 100).send({from: addressM }).then(function(event){
  //         console.log(event);

  //    });
};
exports.approve = async (req, res) => {
  mnemonic = process.env.MNEMONICS
  infuraapi = process.env.INFURAPI

  const provider = new HDWalletProvider(
    mnemonic,
    infuraapi  );
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  const Contract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );
  var acc = await web3.eth.getAccounts();
  const result = await Contract.methods
    .approve(req.body.addressForApprove, req.body.amountToApprove)
    .call()
    .then((result) => {
      console.log(result);
      return res.send(result);
    });

  console.log(result);
  res.send(result);
};

exports.transferFrom = async (req, res) => {
  mnemonic = process.env.MNEMONICS
  infuraapi = process.env.INFURAPI

  const provider = new HDWalletProvider(
    mnemonic,
    infuraapi
  );
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  const Contract = new web3.eth.Contract(
    MyContract.abi,
    MyContract.networks[networkId].address
  );
  var acc = await web3.eth.getAccounts();

  //  addressM = req.body;
  const result = await Contract.methods
    .transferFrom(req.body.address1, req.body.address2, req.body.amountTF)
    .send({ from: acc[0] })
    .then((result) => {
      console.log(result);
      return res.send(result);
    })
    .catch((err) => console.log(err));

  console.log(result);
  res.send(result);
};
