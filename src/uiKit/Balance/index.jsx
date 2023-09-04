import React from 'react';

import './Balance.scss';
import getBalance from '../../functions/getBalance';
import getAddress from '../../functions/getAddress';
import getCurrencyRate from '../../functions/getCurrencyRate';

function Balance() {
  const [balance, setBalance] = React.useState([]);
  const [currencyRate, setRate] = React.useState(0);

  React.useEffect(() => {
    const getBalanceFunc = async () => {
      const address = await getAddress();
      const balance = await getBalance(address);
      setBalance(balance);
    };
    getBalanceFunc();
    getCurrencyRate().then((data) => {
      console.log(data);
      setRate(data);
    });
  }, []);

  return (
    <div className="balance">
      <h3>Баланс:</h3>
      <div className="nums">
        {balance.map((oneBalance, index) => (
          <p key={index}>{oneBalance / currencyRate}</p>
        ))}
      </div>
    </div>
  );
}

export default Balance;
