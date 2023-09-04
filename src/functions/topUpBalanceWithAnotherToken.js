import React from 'react';
import { ethers, providers } from 'ethers';
import { ADD_MERO_ABI, ADD_MERO_ADDRESS1, ADD_MERO_ADDRESS2, ADD_MERO_ADDRESS3 } from './constants';

async function topUpBalanceWithAnotherToken(token, address, currency) {
  // const token = localStorage.getItem('token');

  let newaddress = '';
  const initialAddres = localStorage.getItem('token');

  switch (+initialAddres) {
    case 643:
      newaddress = ADD_MERO_ADDRESS1;
      break;

    case 156:
      newaddress = ADD_MERO_ADDRESS2;
      break;

    case 356:
      newaddress = ADD_MERO_ADDRESS3;
      break;
  }

  try {
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const contract = new ethers.Contract(ADD_MERO_ADDRESS1, ADD_MERO_ABI, provider.getSigner());
    // const company = await contract.topUpBalanceWithAnotherToken(address, currency, 1);

    if (token == 643) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(newaddress, ADD_MERO_ABI, provider.getSigner());
      const company = await contract.topUpBalanceWithAnotherToken(address, currency, 1);
    } else if (token == 156) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(newaddress, ADD_MERO_ABI, provider.getSigner());
      const company = await contract.topUpBalanceWithAnotherToken(address, currency, 1);
    } else if (token == 356) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(newaddress, ADD_MERO_ABI, provider.getSigner());
      const company = await contract.topUpBalanceWithAnotherToken(address, currency, 1);
    }
  } catch (error) {
    console.log(error);
  }
}

export default topUpBalanceWithAnotherToken;
