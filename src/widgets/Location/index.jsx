import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Location.scss';

import Addico from '../../assets/icons/addico.svg';
import Exchange from '../../assets/icons/exchange.svg';
import Payment from '../../assets/icons/payment.svg';
import Profile from '../../assets/icons/profile.svg';
import Transfer from '../../assets/icons/transfer.svg';

const BREADCRUMBS = [
  { name: 'addcompany', crumb: 'Создание', ico: <Addico /> },
  { name: 'refill', crumb: 'Пополнение', ico: <Addico /> },
  { name: 'sell', crumb: 'Продажа', ico: <Exchange /> },
  { name: 'repayment', crumb: 'Погашение', ico: <Payment /> },
  { name: 'profile', crumb: 'Личный кабинет', ico: <Profile /> },
  { name: 'transfer', crumb: 'Перевод', ico: <Transfer /> },
  { name: 'hardrefill', crumb: 'Сложное пополнение', ico: <Transfer /> },
  { name: 'hardsell', crumb: 'Сложная продажа', ico: <Transfer /> },
];

function Location() {
  const location = useLocation();

  let currentLink = '';
  let currentName = '';
  let currentIco;

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      BREADCRUMBS.map((onecrumb, index) => {
        if (onecrumb.name === crumb) {
          currentLink += `/${onecrumb.name}`;
          currentName += onecrumb.crumb;
          currentIco = onecrumb.ico;
          return;
        }
      });

      return (
        <div className="crumbs" key={currentLink}>
          {currentIco}
          <Link to={currentLink}>{currentName}</Link>
        </div>
      );
    });

  return <>{crumbs}</>;
}

export default Location;
