import React from 'react';

import './Transfer.scss';

import FormBlock from '../../widgets/FormBlock';
import getAllNomenclature from '../../functions/getAllNomenclature';
import getCountryCodes from '../../functions/getCountryCodes';
import Select from '../../uiKit/Select';
import { Input } from '../../uiKit';
import transfer from '../../functions/transfer';

const FORMDATA = [
  { type: 'text', disabled: false, title: 'Адрес компании', name: 'companyaddress' },
  { type: 'number', disabled: false, title: 'Торговые токены', name: 'tokens' },
  { type: 'number', disabled: false, title: 'Единицы товара (количество)', name: 'tokens' },
];

function Transfer() {
  const [nomenclatures, setNomenclatures] = React.useState([]);
  const [countryCodes, setCountryCodes] = React.useState([]);
  const [companyAddress, setAddress] = React.useState('');
  const [tokens, setTokens] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('');

  React.useEffect(() => {
    getAllNomenclature().then((res) => setNomenclatures(res));
    getCountryCodes().then((res) => setCountryCodes(res));
  }, []);

  const handleAddressInp = (e) => {
    setAddress(e.target.value);
  };

  const handleTokensInp = (e) => {
    setTokens(e.target.value);
  };

  const handleQuantityInp = (e) => {
    setQuantity(e.target.value);
  };

  const handleGetNomenclature = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleMakeTransfer = () => {
    transfer(companyAddress, tokens, selectedValue, quantity);
  };

  return (
    <div className="transfer">
      <div className="leftNavigation"></div>
      <div className="form">
        <FormBlock buttonText="Перевести" status={'children'} onClick={handleMakeTransfer}>
          <Input
            type="text"
            disabled={false}
            name="companyaddress"
            title="Адрес компании, которой делаем перевод"
            onChange={handleAddressInp}
          />
          <Input
            type="number"
            disabled={false}
            name="tokens"
            title="Торговые токены"
            onChange={handleTokensInp}
          />
          <Input
            type="number"
            disabled={false}
            name="nomenclature"
            title="ID товара"
            onChange={handleGetNomenclature}
          />
          <Input
            type="number"
            disabled={false}
            name="quantity"
            title="Единицы товара (количество)"
            onChange={handleQuantityInp}
          />
        </FormBlock>
      </div>
    </div>
  );
}

export default Transfer;
