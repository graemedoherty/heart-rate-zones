// Card.js

import React from 'react';
import './Card.css'; // Ensure you create and import the CSS file

const Card = ({ children }) => {
  return <div className='Card'>{children}</div>;
};

export default Card;
