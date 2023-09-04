import React from 'react';
import Balance from '../../uiKit/Balance';
import Select from '../../uiKit/Select';
import { Input } from '../../uiKit';
import topUpBalanceWithAnotherToken from '../../functions/topUpBalanceWithAnotherToken';
import getTokenAddressByCountryCode from '../../functions/getTokenAddressByCountryCode';
import FormBlock from '../../widgets/FormBlock';
import getAddress from '../../functions/getAddress';
import getBalance from '../../functions/getBalance';
import getCurrencyRate from '../../functions/getCurrencyRate';
import getCountryCodes from '../../functions/getCountryCodes';

function HardRefill() {
  const [value, setValue] = React.useState(0);
  const [currencyRate, setRate] = React.useState(0);
  const [balance, setBalance] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('');
  const [tokenAddress, setTokenAddress] = React.useState('');
  const [countryCodes, setCountryCodes] = React.useState([]);
  const [tokens, setTokens] = React.useState(0);

  React.useEffect(() => {
    getCurrencyRate().then((data) => {
      console.log(data);
      setRate(data);
    });

    const getBalanceFunc = async () => {
      const address = await getAddress();
      const balance = await getBalance(address);
      console.log(balance);
    };
    getBalanceFunc();

    getCountryCodes().then((res) => setCountryCodes(res));
  }, []);

  const handleChangeCurrencyInput = (e) => {
    setValue(e.target.value / currencyRate);
    setBalance(e.target.value);
  };

  const handleTopUpBalance = () => {
    topUpBalanceWithAnotherToken(selectedValue, tokenAddress, tokens);
  };

  const handleChange = async (event) => {
    setSelectedValue(event.target.value);
    const addr = await getTokenAddressByCountryCode(event.target.value);
    setTokenAddress(addr);
  };

  const handleTokensInp = (e) => {
    setTokens(e.target.value);
  };

  return (
    <div className="refill">
      <div className="form">
        <Balance />
        <h4>
          1 торговый токен = <span>{currencyRate}</span> у.е.
        </h4>
        <FormBlock buttonText="Пополнить" onClick={handleTopUpBalance} status="children">
          <Select
            onChange={handleChange}
            title="Код страны, токенами которой мы хотим пополнить"
            options={countryCodes}
            selectedValue={selectedValue}
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

export default HardRefill;
