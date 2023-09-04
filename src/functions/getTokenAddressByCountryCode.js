import React from 'react';
import Web3 from 'web3';
import { FABRICA_ABI, FABRICA_ADDRESS, RPC_LINK } from './constants';

async function getTokenAddressByCountryCode(countryCode) {
  const web3 = new Web3(RPC_LINK);

  const contract = new web3.eth.Contract(FABRICA_ABI, FABRICA_ADDRESS);
  const code = await contract.methods.getTokenAddressByCountryCode(countryCode).call();
  console.log(code);
  return code;
}

export default getTokenAddressByCountryCode;
