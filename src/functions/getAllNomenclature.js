import React from 'react';
import Web3 from 'web3';
import {
  ADD_MERO_ABI,
  ADD_MERO_ADDRESS1,
  ADD_MERO_ADDRESS2,
  ADD_MERO_ADDRESS3,
  RPC_LINK,
} from './constants';

async function getAllNomenclature() {
  const web3 = new Web3(RPC_LINK);
  const token = localStorage.getItem('token');

  if (token == 643) {
    const token1Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS1);
    const nomenclature1 = await token1Contract.methods.getAllNomenclatureResourceIds().call();
    return nomenclature1;
  } else if (token == 156) {
    const token2Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS2);
    const nomenclature2 = await token2Contract.methods.getAllNomenclatureResourceIds().call();
    return nomenclature2;
  } else if (token == 356) {
    const token3Contract = new web3.eth.Contract(ADD_MERO_ABI, ADD_MERO_ADDRESS3);
    const nomenclature3 = await token3Contract.methods.getAllNomenclatureResourceIds().call();
    return nomenclature3;
  }
}

export default getAllNomenclature;
