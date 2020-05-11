import React from "react";

function Box(props) {
  return (
    <div className={props.classes} onClick={props.gotClicked}>
      <h1>
        {props.character}
      </h1>
    </div>
  );
}

export default Box;
