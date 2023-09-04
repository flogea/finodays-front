import React from 'react';

import './Select.scss';

function Select({ title, options, onChange, selectedValue }) {
  return (
    <div>
      <select name="select" value={selectedValue} onChange={onChange}>
        <option value="">{title}</option>
        {options?.map((opt, index) => (
          <option key={`${index}_${opt}`} value={Number(opt)}>
            {Number(opt)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
