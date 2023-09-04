import React from 'react';

import './Sell.scss';

import FormBlock from '../../widgets/FormBlock';
import getCurrencyRate from '../../functions/getCurrencyRate';
import sellTokens from '../../functions/sellTokens';
import Balance from '../../uiKit/Balance';

const FORMDATA = [{ type: 'number', disabled: false, title: 'Торговые токены', name: 'tokens' }];

function Sell() {
  const [value, setValue] = React.useState(0);
  const [currencyRate, setRate] = React.useState(0);
  const [balance, setBalance] = React.useState(0);

  React.useEffect(() => {
    getCurrencyRate().then((data) => {
      console.log(data);
      setRate(data);
    });
  }, []);

  const handleChangeCurrencyInput = (e) => {
    setValue(e.target.value * currencyRate);
    setBalance(e.target.value);
  };

  const handleSellTokens = () => {
    sellTokens(balance);
  };

  return (
    <div className="sell">
      <div className="form">
        <Balance />
        <h4>
          1 торговый токен = <span>{currencyRate}</span> у.е.
        </h4>
        <FormBlock
          data={FORMDATA}
          tokens={value}
          buttonText="Продать"
          onChange={handleChangeCurrencyInput}
          onClick={handleSellTokens}
        />
      </div>
    </div>
  );
}

export default Sell;
