import React from 'react';
import Web3 from 'web3';
import { ethers, providers } from 'ethers';
import {
  ADD_MERO_ABI,
  ADD_MERO_ADDRESS1,
  ADD_MERO_ADDRESS2,
  ADD_MERO_ADDRESS3,
  RPC_LINK,
} from './constants';

async function sellTokens(value) {
  const token = localStorage.getItem('token');

  const web3 = new Web3(RPC_LINK);

  try {
    if (token == 643) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ADD_MERO_ADDRESS1, ADD_MERO_ABI, provider.getSigner());
      const company = await contract.withdraw(value, 1);
    } else if (token == 156) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ADD_MERO_ADDRESS1, ADD_MERO_ABI, provider.getSigner());
      const company = await contract.withdraw(value, 1);
    } else if (token == 356) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(ADD_MERO_ADDRESS1, ADD_MERO_ABI, provider.getSigner());
      const company = await contract.withdraw(value, 1);
    }
  } catch (error) {
    console.log(error);
  }
}

export default sellTokens;
