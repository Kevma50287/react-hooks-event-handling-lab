// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe (){
    return (
        // remember that everything inside the curly braces are evaluated as a JS expression. 
        // We still need to invoke it using IIFE (arrow syntax)
        // or defining the function elsewhere and passing the function to the change event)
        <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')} >Eyes on me</button>
    )
}

export default EyesOnMe;
