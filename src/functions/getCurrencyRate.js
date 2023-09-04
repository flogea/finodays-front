import React from 'react';
import Web3 from 'web3';
import {
  ADD_MERO_ABI,
  ADD_MERO_ADDRESS1,
  ADD_MERO_ADDRESS2,
  ADD_MERO_ADDRESS3,
  RPC_LINK,
} from './constants';

async function getCurrencyRate() {
  const web3 = new Web3(RPC_LINK);
  const token = localStorage.getItem('token');

  if (token == 643) {
    const contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS1);
    const currency = await contract.methods.getProductRate(1, 1).call();
    return Number(currency);
  } else if (token == 156) {
    const contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS2);
    const currency = await contract.methods.getProductRate(1, 1).call();
    return Number(currency);
  } else if (token == 356) {
    const contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS3);
    const currency = await contract.methods.getProductRate(1, 1).call();
    return Number(currency);
  }
}

export default getCurrencyRate;
