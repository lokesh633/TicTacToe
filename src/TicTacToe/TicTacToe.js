import React, { useState, useEffect } from "react";
import "./tictactoe.css";
import pattern from "./pattern";
import Win from "./win";
import Draw from "./draw";

const Tictacto = () => {
  const init = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(init);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [lastInd, setLastInd] = useState(-1);
  const [showResult, setShowResult] = useState(0);

  console.log("form tic", currentPlayer);

  const handleBoard = (i) => {
    setLastInd(i);
    if (board[i] !== "") return;
    setBoard(
      board.map((item, index) => {
        if (i === index) {
          return currentPlayer;
        } else {
          return item;
        }
      })
    );
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const checkWin = () => {
    if (lastInd < 0) return;
    let previousPlayer = currentPlayer === "X" ? "O" : "X";
    pattern[lastInd].forEach((arr) => {
      const checkArr =
        board[arr[0]] === previousPlayer &&
        board[arr[1]] === previousPlayer &&
        board[arr[2]] === previousPlayer;
      const checkFill = board.every((ele) => ele !== "");
      if (checkArr) {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        setShowResult(2);
      } else if (checkArr === false && checkFill) {
        setShowResult(1)
      }
    });
  };

  const reset = () => {
    setCurrentPlayer("X");
    setBoard(init);
    setLastInd(-1);
  };

  useEffect(() => {
    checkWin();
  });

  return (
    <>
      {showResult === 1 ? (
        <Draw  setCurrentPlayer={setCurrentPlayer} setShowResult={setShowResult} setBoard={setBoard} init={init} />
      ) : showResult === 2 ? (
        <Win currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} setShowResult={setShowResult} setBoard={setBoard} init={init} />
      ) : showResult=== 0 ? (
        <div className="main-container">
          <div className="display-player">
            Current Player is: {currentPlayer}
          </div>
          <div className="main-board">
            {board.map((item, index) => {
              return (
                <div
                  key={index}
                  className="board"
                  onClick={() => handleBoard(index)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div>
            <button className="btn btn-primary" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
      ):("")}
    </>
  );
};

export default Tictacto;
