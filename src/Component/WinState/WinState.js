import React from "react";
import styled, { keyframes } from "styled-components";
import {
  fadeIn
} from "react-animations";

const Fade = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;

const WinState = (props) => {
  return (
    <Fade>
      <div className="winParent" onClick={props.reset}>
        <img src="https://i.imgur.com/kv2oHwT.gif" alt="win" />
        <h1 className="winText">Winner!!!!</h1>
      </div>
    </Fade>
  );
};

export default WinState;
