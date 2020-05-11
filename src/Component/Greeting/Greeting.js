import React from 'react';

function Greeting(props){
    return (
        <div onClick={props.clickIt} className={props.hidden ? "hidden" : ""}>
            <h1>Click dis shit</h1>
        </div>
    );
};

export default Greeting;