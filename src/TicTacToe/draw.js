import React from 'react';
import "./tictactoe.css";
import { ImCross } from "react-icons/im";

const Draw = ({setShowResult,setBoard,init,setCurrentPlayer}) => {

  const handleClose=()=>{
    setShowResult(0);
    setBoard(init);
    setCurrentPlayer("X")
  }

  return (
    <div className='draw-main'>
        <div className='draw-container'>
            <div className='draw-header'><span>Result</span><span className='close' onClick={handleClose}><ImCross/></span></div>
            <div className='draw-display'>Game Draw</div>
            <div className='draw-footer'><button className='btn btn-primary' onClick={handleClose}>Play Again</button><button className='btn btn-danger' onClick={handleClose} >Close</button></div>
        </div>
    </div>
  )
}

export default Draw