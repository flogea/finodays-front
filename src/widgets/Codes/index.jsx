import React from 'react';

import './Codes.scss';

function Codes() {
  return (
    <table className="iksweb">
      <tbody>
        <tr>
          <th>Код операции</th>
          <th>Расшифровка</th>
        </tr>
        <tr>
          <td>1004</td>
          <td>Перевод между кошельками (Wallet-to-Wallet Trading Tokens Transfer)</td>
        </tr>
        <tr>
          <td>1005</td>
          <td>Обмен активами (Resourses Exchange)</td>
        </tr>
        <tr>
          <td>1006</td>
          <td>Умное погашение</td>
        </tr>
        <tr>
          <td>1007</td>
          <td>Пополнение баланса (Balance Trading Tokens Top-up)</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Codes;
