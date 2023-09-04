import React from 'react';

import './Form.scss';

import { Button, Input } from '../../uiKit';
import Select from '../../uiKit/Select';

function FormBlock({
  data,
  buttonText,
  tokens,
  options,
  onChange,
  onClick,
  type,
  children,
  status,
}) {
  return (
    <div className="formBlock">
      {status ? (
        children
      ) : type ? (
        <Select options={options} title={type} type={type} onChange={onChange} />
      ) : (
        !!options && options.map((opt, index) => <Select options={opt} />)
      )}
      {data?.map((inp, index) => (
        <Input key={`${inp}_${index}`} {...inp} onChange={onChange} />
      ))}
      {!!tokens && (
        <p className="tokens">
          Итого: <span>{tokens}</span>
        </p>
      )}
      <Button style="filled" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
}

export default FormBlock;
