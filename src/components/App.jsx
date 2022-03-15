import React, {useState} from "react";
import Screen from "./Screen/Screen"
import Button from "./Button/Button";
import * as math from 'mathjs';


export default function App(){

    const keys=[7,8,9, '*', 4, 5, 6, '/', 1, 2, 3, '+', '.', 0, '=', '-']

    const [value, setValue] = useState("")

    function displayText(buttonValue){
        if(buttonValue === "="){
            setValue(math.evaluate(value))
        } else{
            setValue(prevValue => {return prevValue + buttonValue})
        }
    }

    return (<div className="main">
    <Screen value={value} />
    <div className="wrapper">
     {(keys.map((buttonValue, index) => <Button key={index} id={index} text={buttonValue} handleClick={() => {displayText(buttonValue)}} />))}
     <button className="clear">Clear</button>
    </div>
    </div>)
}