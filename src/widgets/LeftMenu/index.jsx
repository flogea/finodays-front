import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './LeftMenu.scss';

function LeftMenu() {
  const [isVisible, setVisible] = React.useState(true);

  const location = useLocation();
  const currentLocation = location.pathname.split('/')[1];

  React.useEffect(() => {
    if (!currentLocation) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [currentLocation]);

  return (
    isVisible && (
      <div className="leftmenu">
        <Link to="/addcompany">Создать компанию</Link>
        <Link to="/refill">Пополнение</Link>
        <Link to="/hardrefill">Сложное пополнение</Link>
        <Link to="/repayment">Погашение</Link>
        <Link to="/transfer">Перевод</Link>
        <Link to="/sell">Продажа</Link>
        <Link to="/hardsell">Сложная продажа</Link>
      </div>
    )
  );
}

export default LeftMenu;
