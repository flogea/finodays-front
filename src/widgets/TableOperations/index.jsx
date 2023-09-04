import React from 'react';

import './Table.scss';

function TableOperations({ props, data, fromto, fromtoeng }) {
  // data.map((row, index) => row.map((cell) => console.log(fromto, cell[fromtoeng])));

  return (
    <div className="tableOperations">
      <p>{props}</p>
      <table>
        <tbody>
          <tr>
            <th>Дата</th>
            <th>Код операции</th>
            <th>{fromto}</th>
            <th>Код товара</th>
            <th>Количество</th>
            <th>Токены</th>
            <th>Статус</th>
          </tr>
          {data.map((row, index) =>
            row.map((cell, index) => (
              <tr>
                <td>
                  {`${new Date(Number(cell.timestamp) * 1000).getDay()}-${new Date(
                    Number(cell.timestamp) * 1000,
                  ).getMonth()}-${new Date(Number(cell.timestamp) * 1000).getUTCFullYear()}`}
                </td>
                <td>{Number(cell.operationCode)}</td>
                <td>{cell[fromtoeng]}</td>
                <td>{Number(cell.subjectCode)}</td>
                <td>{Number(cell.subjectAmount)}</td>
                <td>{Number(cell.ttokensAmount)}</td>
                <td>{Number(cell.status)}</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableOperations;
