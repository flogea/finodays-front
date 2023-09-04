import React from 'react';
import { ethers, providers } from 'ethers';
import Web3 from 'web3';
import {
  ADD_MERO_ABI,
  ADD_MERO_ADDRESS1,
  ADD_MERO_ADDRESS2,
  ADD_MERO_ADDRESS3,
  RPC_LINK,
} from './constants';

async function getAllCompanies() {
  const web3 = new Web3(RPC_LINK);

  const token1Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS1);
  const currency1 = await token1Contract.methods.getAllCompanies().call();

  // const token2Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS2);
  // const currency2 = await token2Contract.methods.getOperationsInArrayByAddress(address).call();

  // const token3Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS3);
  // const currency3 = await token3Contract.methods.getOperationsInArrayByAddress(address).call();

  // return [Number(currency1), Number(currency2), Number(currency3)];
  return currency1;
}

export default getAllCompanies;
