import React from 'react';
import Web3 from 'web3';
import {
  ADD_MERO_ABI,
  ADD_MERO_ADDRESS1,
  ADD_MERO_ADDRESS2,
  ADD_MERO_ADDRESS3,
  RPC_LINK,
} from './constants';

async function getCountryCodes() {
  const web3 = new Web3(RPC_LINK);

  const token1Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS1);
  const country1 = await token1Contract.methods.getCountryCode().call();

  const token2Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS2);
  const country2 = await token2Contract.methods.getCountryCode().call();

  const token3Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS3);
  const country3 = await token3Contract.methods.getCountryCode().call();

  return [country1, country2, country3];
}

export default getCountryCodes;
