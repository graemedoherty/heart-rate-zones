import React, { forwardRef } from 'react';
import './Card.css';

const Card = forwardRef((props, ref) => {
  return (
    <div className='Card' ref={ref}>
      {props.children}
    </div>
  );
});

export default Card;
