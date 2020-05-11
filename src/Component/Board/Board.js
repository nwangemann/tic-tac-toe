import React, { useState } from "react";
import Box from "../Box/Box";
import WinState from "../WinState/WinState";

function Board() {
  const [selectedBoxes, setSelectedBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [values, setValues] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turnOne, setTurnOne] = useState(true);
  const [winState, setWinState] = useState(false);

  function handleSelect(id) {
    let playCharacter = "X";
    if (!turnOne) {
      playCharacter = "O";
    }
    let updated = [...selectedBoxes];
    updated[id] = playCharacter;
    setSelectedBoxes(updated);
    let newArr = [...values];
    newArr[id] = playCharacter;
    setValues(newArr);
    winCheck(newArr);
    setTurnOne(!turnOne);
  }
  function winCheck(newArray) {
      console.log('values', newArray)
    if (newArray[0] === newArray[4] && newArray[4] === newArray[8] && newArray[8] === "X") {
        setWinState(true);
    } else if (newArray[0] === newArray[4] && newArray[4] === newArray[8] && newArray[8] === "O") {
        setWinState(true);
    } else if (newArray[1] === newArray[4] && newArray[4] === newArray[7] && newArray[7] === "X") {
        setWinState(true);
    } else if (newArray[1] === newArray[4] && newArray[4] === newArray[7] && newArray[7] === "O") {
        setWinState(true);
    } else if (newArray[2] === newArray[4] && newArray[4] === newArray[6] && newArray[6] === "X") {
        setWinState(true);
    } else if (newArray[2] === newArray[4] && newArray[4] === newArray[6] && newArray[6] === "O") {
        setWinState(true);
    } else if (newArray[3] === newArray[4] && newArray[4] === newArray[5] && newArray[5] === "X") {
        setWinState(true);
    } else if (newArray[3] === newArray[4] && newArray[4] === newArray[5] && newArray[5] === "O") {
        setWinState(true);
    } else if (newArray[0] === newArray[3] && newArray[3] === newArray[6] && newArray[6] === "X") {
        setWinState(true);
    } else if (newArray[0] === newArray[3] && newArray[3] === newArray[6] && newArray[6] === "O") {
        setWinState(true);
    } else if (newArray[1] === newArray[4] && newArray[4] === newArray[7] && newArray[7] === "X") {
        setWinState(true);
    } else if (newArray[1] === newArray[4] && newArray[4] === newArray[7] && newArray[7] === "O") {
        setWinState(true);
    } else if (newArray[2] === newArray[5] && newArray[5] === newArray[8] && newArray[8] === "X") {
        setWinState(true);
    } else if (newArray[2] === newArray[5] && newArray[5] === newArray[8] && newArray[8] === "O") {
        setWinState(true);
    } else if (newArray[0] === newArray[1] && newArray[1] === newArray[2] && newArray[2] === "X") {
        setWinState(true);
    } else if (newArray[0] === newArray[1] && newArray[1] === newArray[2] && newArray[2] === "O") {
        setWinState(true);
    } else if (newArray[3] === newArray[4] && newArray[4] === newArray[5] && newArray[5] === "X") {
        setWinState(true);
    } else if (newArray[3] === newArray[4] && newArray[4] === newArray[5] && newArray[5] === "O") {
        setWinState(true);
    } else if (newArray[6] === newArray[7] && newArray[7] === newArray[8] && newArray[8] === "X") {
        setWinState(true);
    } else if (newArray[6] === newArray[7] && newArray[7] === newArray[8] && newArray[8] === "O") {
        setWinState(true);
    }
  }
  function reset() {
    setSelectedBoxes([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);
    setValues(["", "", "", "", "", "", "", "", ""]);
    setTurnOne(true);
    setWinState(false)
  }

  return (
    <div>
      {winState ? (
        <WinState />
      ) : (
        <div>
          <div className="row1">
            <Box
              classes={"boxParent"}
              character={values[0]}
              gotClicked={() => handleSelect(0)}
              selected={selectedBoxes[0]}
            />
            <Box
              classes={"boxParent middle"}
              character={values[1]}
              gotClicked={() => handleSelect(1)}
              selected={selectedBoxes[1]}
            />
            <Box
              classes={"boxParent"}
              character={values[2]}
              gotClicked={() => handleSelect(2)}
              selected={selectedBoxes[2]}
            />
          </div>
          <div className="row2">
            <Box
              classes={"boxParent leftright"}
              character={values[3]}
              gotClicked={() => handleSelect(3)}
              selected={selectedBoxes[3]}
            />
            <Box
              classes={"boxParent center"}
              character={values[4]}
              gotClicked={() => handleSelect(4)}
              selected={selectedBoxes[4]}
            />
            <Box
              classes={"boxParent leftright"}
              character={values[5]}
              gotClicked={() => handleSelect(5)}
              selected={selectedBoxes[5]}
            />
          </div>
          <div className="row3">
            <Box
              classes={"boxParent"}
              character={values[6]}
              gotClicked={() => handleSelect(6)}
              selected={selectedBoxes[6]}
            />
            <Box
              classes={"boxParent middle"}
              character={values[7]}
              gotClicked={() => handleSelect(7)}
              selected={selectedBoxes[7]}
            />
            <Box
              classes={"boxParent"}
              character={values[8]}
              gotClicked={() => handleSelect(8)}
              selected={selectedBoxes[8]}
            />
          </div>
        </div>
      )}

      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Board;
