import React from 'react';
import axios from 'axios';

import { TableOperations } from '../../widgets';
import getAddress from '../../functions/getAddress';
import getOperationsIn from '../../functions/getOperationsIn';
import Balance from '../../uiKit/Balance';
import getOperationsOut from '../../functions/getOperationsOut';

import './Profile.scss';

function Profile() {
  const [dataFrom, setDataFrom] = React.useState([]);
  const [dataTo, setDataTo] = React.useState([]);

  React.useEffect(() => {
    getAddress().then((res) => getOperationsIn(res).then((data) => setDataFrom(data)));
    getAddress().then((res) => getOperationsOut(res).then((data) => setDataTo(data)));
  }, []);

  return (
    <div className="profile">
      <Balance />
      <TableOperations props="Исходящие" data={dataTo} fromto="Кому" fromtoeng="to" />
      <TableOperations props="Входящие" data={dataFrom} fromto="От кого" fromtoeng="from" />
    </div>
  );
}

export default Profile;
