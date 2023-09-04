import React from 'react';
import getCurrencyRate from '../../functions/getCurrencyRate';

import './Refill.scss';

import FormBlock from '../../widgets/FormBlock';
import topUpBalance from '../../functions/topUpBalance';
import getAddress from '../../functions/getAddress';
import getBalance from '../../functions/getBalance';
import Balance from '../../uiKit/Balance';

const FORMDATA = [{ type: 'number', disabled: false, title: 'Введите сумму', name: 'summ' }];

function Refill() {
  const [value, setValue] = React.useState(0);
  const [currencyRate, setRate] = React.useState(0);
  const [balance, setBalance] = React.useState(0);

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
  }, []);

  const handleChangeCurrencyInput = (e) => {
    setValue(e.target.value / currencyRate);
    setBalance(e.target.value / currencyRate);
  };

  const handleTopUpBalance = () => {
    topUpBalance(balance);
  };

  return (
    <div className="refill">
      <div className="form">
        <Balance />
        <h4>
          1 торговый токен = <span>{currencyRate}</span> у.е.
        </h4>
        <FormBlock
          data={FORMDATA}
          tokens={value}
          buttonText="Пополнить"
          onChange={handleChangeCurrencyInput}
          onClick={handleTopUpBalance}
        />
      </div>
    </div>
  );
}

export default Refill;
