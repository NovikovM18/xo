import React from 'react';
import './style.css';

const Field = (props) => {
  return (
    <button className='field' onClick={props.onClick}>{props.data}</button>  
  );
}

export default Field;

