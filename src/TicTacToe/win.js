import React from 'react';
import "./tictactoe.css";
import { ImCross } from "react-icons/im";



const Win = ({currentPlayer,setShowResult,setBoard,init,setCurrentPlayer}) => {

  const handleWIn = ()=>{
    setBoard(init)
    setShowResult(0)
    setCurrentPlayer("X")
  }
  return (
    <div className='win-main'>
        <div className='win-container'>
            <div className='win-header'><span>Result</span><span className='close' onClick={handleWIn}><ImCross/></span></div>
            <div className='win-display'>{currentPlayer} Won the match</div>
            <div className='win-footer'><button className='btn btn-primary' onClick={handleWIn}>Play Again</button><button className='btn btn-danger' onClick={handleWIn}>Close</button></div>
        </div>
    </div>
  )
}

export default Win