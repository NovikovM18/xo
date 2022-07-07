import React from 'react'
import './style.css';

export default function Modal(props) {
  let p1 = React.createRef();
  let p2 = React.createRef();

  function setNames() {
    props.setP1(p1.current.value);
    props.setP2(p2.current.value);
    props.setModal(false);
  }

  return (
    <>
    <div className="container">
    </div>
    <div className='modal'>
      <h3>set players name</h3>
      <input type="text" ref={p1}/>
      <input type="text" ref={p2}/>
      <button onClick={setNames}>OK</button>
    </div>
    </>
  )
}
