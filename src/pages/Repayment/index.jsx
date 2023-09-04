import React from 'react';

import './Repayment.scss';

import FormBlock from '../../widgets/FormBlock';
import { Input } from '../../uiKit';
import Select from '../../uiKit/Select';
import redemption from '../../functions/redemption';
import getAllNomenclature from '../../functions/getAllNomenclature';

const FORMDATA = [
  { type: 'text', disabled: false, title: 'Адрес компании', name: 'companyaddress' },
  { type: 'number', disabled: false, title: 'Торговые токены', name: 'tokens' },
];

function Repayment() {
  const [nomenclatures, setNomenclatures] = React.useState([]);
  const [companyAddress, setAddress] = React.useState('');
  const [tokens, setTokens] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('');

  React.useEffect(() => {
    getAllNomenclature().then((res) => setNomenclatures(res));
  }, []);

  const handleAddressInp = (e) => {
    setAddress(e.target.value);
  };

  const handleTokensInp = (e) => {
    setTokens(e.target.value);
  };

  const handleGetNomenclature = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClickRedemption = () => {
    redemption(companyAddress, selectedValue, tokens);
  };

  return (
    <div className="repayment">
      <div className="leftNavigation"></div>
      <div className="form">
        <FormBlock buttonText="Погасить" onClick={handleClickRedemption} status="children">
          <Input
            type="text"
            disabled={false}
            name="companyaddress"
            title="Адрес компании, которой хотим сделать перевод"
            onChange={handleAddressInp}
          />
          <Select
            options={nomenclatures}
            onChange={handleGetNomenclature}
            selectedValue={selectedValue}
            title="Номенклатура"
          />
          <Input
            type="number"
            disabled={false}
            name="tokens"
            title="Торговые токены"
            onChange={handleTokensInp}
          />
        </FormBlock>
      </div>
    </div>
  );
}

export default Repayment;
