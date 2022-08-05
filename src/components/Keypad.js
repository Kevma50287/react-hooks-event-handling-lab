// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
            {/* JSX event listerners are camelTyped */}
            <input type="password" onChange={() => console.log('Entering password...')} />
        </div>
    )
}

export default Keypad;