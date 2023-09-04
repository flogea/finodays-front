import React from 'react';

import './Input.scss';

function Input({ type, disabled, name, title, onChange }) {
  return (
    <div className="inp">
      <label htmlFor={name} className="labelForInput">
        {title}
      </label>
      <input
        type={type}
        disabled={disabled}
        name={name}
        placeholder={title}
        className="dataInput"
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
