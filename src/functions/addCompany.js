import React from 'react';
import { ethers, providers } from 'ethers';

import { ADD_MERO_ABI, ADD_MERO_ADDRESS1, ADD_MERO_ADDRESS2, ADD_MERO_ADDRESS3 } from './constants';

async function addCompany() {
  const token = localStorage.getItem('token');

  if (token == 643) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ADD_MERO_ADDRESS1, ADD_MERO_ABI, provider.getSigner());
    const company = await contract.addCompany();
  } else if (token == 156) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ADD_MERO_ADDRESS2, ADD_MERO_ABI, provider.getSigner());
    const company = await contract.addCompany();
  } else if (token == 356) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(ADD_MERO_ADDRESS3, ADD_MERO_ABI, provider.getSigner());
    const company = await contract.addCompany();
  }
}

export default addCompany;
