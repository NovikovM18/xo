import React from 'react';
import './style.css';
import Field from '../field/Field'

const Board = ({board, move}) => {


  return (
    <div className='board'>
      {board.map((field, i) => (
        <Field key={i} data={field} onClick={()=>move(i)}/>
        ))}
    </div>
  );
}

export default Board;
