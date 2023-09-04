import React from 'react';
import { ethers, providers } from 'ethers';

import { ADD_MERO_ABI, ADD_MERO_ADDRESS1, ADD_MERO_ADDRESS2, ADD_MERO_ADDRESS3 } from './constants';

async function aprove(token, tokens) {
  let address = '';
  const initialAddres = localStorage.getItem('token');

  switch (+initialAddres) {
    case 643:
      address = ADD_MERO_ADDRESS1;
      break;

    case 156:
      address = ADD_MERO_ADDRESS2;
      break;

    case 356:
      address = ADD_MERO_ADDRESS3;
      break;
  }

  if (token == 643) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ADD_MERO_ADDRESS1, ADD_MERO_ABI, provider.getSigner());
    const company = await contract.approve(address, tokens);
  } else if (token == 156) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ADD_MERO_ADDRESS2, ADD_MERO_ABI, provider.getSigner());
    const company = await contract.approve(address, tokens);
  } else if (token == 356) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ADD_MERO_ADDRESS3, ADD_MERO_ABI, provider.getSigner());
    const company = await contract.approve(address, tokens);
  }
}

export default aprove;
