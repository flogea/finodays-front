import React from 'react';

import './Button.scss';

function Button({ children, style, onClick }) {
  return (
    <div>
      <button className={style} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
