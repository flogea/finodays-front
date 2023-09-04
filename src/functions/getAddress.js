import React from 'react';
import { ethers, providers } from 'ethers';

async function getAddress() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const address = await provider.getSigner().getAddress();
  return address;
}

export default getAddress;
