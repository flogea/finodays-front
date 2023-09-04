import React from 'react';
import FormBlock from '../../widgets/FormBlock';
import Select from '../../uiKit/Select';
import { Button, Input } from '../../uiKit';
import getCountryCodes from '../../functions/getCountryCodes';
import Balance from '../../uiKit/Balance';
import getCurrencyRate from '../../functions/getCurrencyRate';
import getAddress from '../../functions/getAddress';
import getBalance from '../../functions/getBalance';
import getTokenAddressByCountryCode from '../../functions/getTokenAddressByCountryCode';
import withdrawWithAnotherToken from '../../functions/withdrawWithAnotherToken';
import aprove from '../../functions/aprove';
import { ADD_MERO_ADDRESS1, ADD_MERO_ADDRESS2, ADD_MERO_ADDRESS3 } from '../../functions/constants';

function HardSell() {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [countryCodes, setCountryCodes] = React.useState([]);
  const [tokens, setTokens] = React.useState(0);
  const [currencyRate, setRate] = React.useState(0);
  const [tokenAddress, setTokenAddress] = React.useState('');

  const handleChange = async (event) => {
    setSelectedValue(event.target.value);
    const addr = await getTokenAddressByCountryCode(event.target.value);
    setTokenAddress(addr);
  };

  const handleTokensInp = (e) => {
    setTokens(e.target.value);
  };

  React.useEffect(() => {
    getCurrencyRate().then((data) => {
      console.log(data);
      setRate(data);
    });

    const getBalanceFunc = async () => {
      const address = await getAddress();
      console.log(address);
      const balance = await getBalance(address);
      console.log(balance);
    };
    getBalanceFunc();

    getCountryCodes().then((res) => setCountryCodes(res));
  }, []);

  const handleClickSell = () => {
    withdrawWithAnotherToken(selectedValue, tokenAddress, tokens);
  };

  const handleAprove = () => {
    aprove(selectedValue, tokens);
  };

  return (
    <div className="sell">
      <div className="form">
        <Balance />
        <h4>
          1 торговый токен = <span>{currencyRate}</span> у.е.
        </h4>
        <FormBlock buttonText="Продать" status="children" onClick={handleClickSell}>
          <Select
            onChange={handleChange}
            title="Код страны, токены которой хотим вывести"
            options={countryCodes}
            selectedValue={selectedValue}
          />
          <Input
            type="number"
            disabled={false}
            name="tokens"
            title="Валюта"
            onChange={handleTokensInp}
          />
          <Button onClick={handleAprove}>Подтвердить</Button>
        </FormBlock>
      </div>
    </div>
  );
}

export default HardSell;
