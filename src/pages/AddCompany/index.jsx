import React from 'react';
import getCountryCodes from '../../functions/getCountryCodes';

import './AddCompany.scss';

import FormBlock from '../../widgets/FormBlock';
import addCompany from '../../functions/addCompany';
import getAllCompanies from '../../functions/getAllCompanies';
import getBalance from '../../functions/getBalance';
import Select from '../../uiKit/Select';

function AddCompany() {
  const [countryCodes, setCountryCodes] = React.useState([]);

  React.useEffect(() => {
    getCountryCodes().then((res) => setCountryCodes(res));
    // getAllCompanies().then((data) => console.log(data));
    // getBalance().then((data) => console.log(data));
  }, []);

  const handleCreateCompany = () => {
    addCompany();
  };

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    localStorage.setItem('token', event.target.value);
  };

  return (
    <div className="addcompany">
      <div className="form">
        <FormBlock buttonText="Создать" status={'children'} onClick={handleCreateCompany}>
          <Select
            onChange={handleChange}
            title="Код страны"
            options={countryCodes}
            selectedValue={selectedValue}
          />
        </FormBlock>
      </div>
    </div>
  );
}

export default AddCompany;
