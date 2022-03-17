import React, {useState} from "react";
import Screen from "./Screen/Screen"
import Button from "./Button/Button";
import * as math from 'mathjs';


export default function App(){

    const keys=[7,8,9, '*', 4, 5, 6, '/', 1, 2, 3, '+', '.', 0, '=', '-']

    const [value, setValue] = useState('')
    const [operator, setOperator] = useState('')
    const [secondValue, setSecondValue] = useState('')


    // function displayText(buttonValue){
    //     if(buttonValue === "="){
    //         setValue(math.evaluate(value))
    //     } else{
    //         setValue(prevValue => {return prevValue + buttonValue})
    //     }
    // }


    
    function displayText(buttonValue){
        //Dacă secondValue este ocupat și se apasă iar pe Operator, se face =
        //Dacă nu, se schimbă Value

        if(operator !=="" && typeof buttonValue === 'number' || buttonValue === '.'){
            setSecondValue(prevValue => {return prevValue + buttonValue})
        } else if(typeof buttonValue === 'number' || buttonValue === '.'){
            setValue(prevValue => {return prevValue + buttonValue})
        }
        //Dacă e operator, se schimbă Operator
        if(buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/"){
            setOperator(buttonValue)
        }
        //Dacă Operator este ocupat, se schimbă secondValue
        
        if(secondValue !=="" && buttonValue === "+" || buttonValue === "-" || buttonValue === "*" || buttonValue === "/" ){
            console.log(math.evaluate(`${value}${operator}${secondValue}`))
        }

    }


    // parseInt(value), operator, parseInt(secondValue)


    // function clearState(){
    //     setValue("")
    // }

    return (<div className="main">
    <Screen value={secondValue !=="" ? secondValue : value} />
    <div className="wrapper">
     {(keys.map((buttonValue, index) => <Button key={index} id={index} text={buttonValue} handleClick={() => {displayText(buttonValue)}} />))}
     <button className="clear" >Clear</button>
    </div>
    
    </div>)
}
