/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import Board from '../board/Board';
import Modal from '../modal/Modal';
import './style.css';

let p1win = 0;
let p2win = 0;

export default function game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [nextX, setNextX] = useState(true);
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [modal, setModal] = useState(true);
  const winner = setWinner(board);

  function setWinner(data) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (data[a] === 'X' && data[a] === data[b] && data[a] === data[c]) {
        p1win++;
        return p1;
      }
      if (data[a] === '0' && data[a] === data[b] && data[a] === data[c]) {
        p2win++;
        return p2;
      }
    }
    return null;
  };

  function move(i) {
    const newBoard = [...board];
    if (winner || newBoard[i]) {
      return;
    }
    newBoard[i] = nextX ? 'X' : '0';
    setBoard(newBoard);
    setNextX(!nextX);
  }

  return (
    <div className='game'>
      {modal ? <Modal setP1={setP1} setP2={setP2} setModal={setModal}/> : ''}
      <div className='box'>
        <Board board={board} move={move}/>
        <div className="data">
          <h2 className='title'>SCORE:</h2>
          {(p1 ? <h3>{p1} : {p1win/2}</h3> : <h3>Player1: {p1win/2}</h3> )}
          {(p2 ? <h3>{p2} : {p2win/2}</h3> : <h3>Player2: {p1win/2}</h3> )}
          {winner ? <h2 className='title'>WINNER: {winner}</h2> : ''}
          
          <button 
            className='new' 
            onClick={() => setBoard(Array(9).fill(null))}
            >
            new game
          </button>
        </div>
      </div>
    </div>
  )
}
