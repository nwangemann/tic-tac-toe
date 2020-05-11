import React from "react";
import styled, { keyframes } from "styled-components";
import {  merge, pulse, tada } from "react-animations";

const mergeStyle = merge(tada, pulse);

const Swing = styled.div`
  animation: 5s ${keyframes`${mergeStyle}`} infinite;
`;

function Greeting(props) {
  return (
    <div onClick={props.clickIt} className={props.hidden ? "hidden" : ""}>
      <Swing>
        <h1 className="titleText">Click dis shit</h1>
      </Swing>
    </div>
  );
}

export default Greeting;
