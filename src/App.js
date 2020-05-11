import React, { useState } from "react";
import "./App.css";
import Board from "./Component/Board/Board";
import styled, { keyframes } from "styled-components";
import Greeting from "./Component/Greeting/Greeting";
import {
  merge,
  bounceInDown,
  fadeIn
} from "react-animations";

//(bounceInDown, flip);
const mergeStyle = merge(bounceInDown, fadeIn);

const Rotate = styled.div`
  animation: 2s ${keyframes`${mergeStyle}`};
`;

function App() {
  const [enter, setEnter] = useState(true);
  const [hidden, setHidden] = useState(false);
  function ziggazagga() {
    setEnter(true);
    setHidden(true);
    setTimeout(() => {
      setEnter(false);
    }, 2);
  }
  return (
    <div className="App">
      {enter ? (
        <Greeting hidden={hidden} clickIt={() => setEnter(false)} />
      ) : (
        <Rotate>
          <Board whenItResets={ziggazagga} />
        </Rotate>
      )}
    </div>
  );
}

export default App;
