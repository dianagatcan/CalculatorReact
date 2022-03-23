import React, {useState} from "react";
import Screen from "./Screen/Screen"
import Button from "./Button/Button";
import * as math from 'mathjs';



/**
 * after = if a number is pressed, initiate a new calcul
 * 
 * 
 */

export default function App(){

    const keys=[7,8,9, '*', 4, 5, 6, '/', 1, 2, 3, '+', '.', 0, '=', '-']

    const [value, setValue] = useState('0')
    const [operator, setOperator] = useState('')
    const [secondValue, setSecondValue] = useState('0')

    function isOperator(){
        return operator ? true : false;
    }

    function displayValue(buttonValue){
            //we want to display first value only when no operator is selected
        if(!isOperator() && (typeof buttonValue === "number" || buttonValue==='.')){
            setValue(prevValue => {return trimFirstZero(prevValue + buttonValue)})
        }
    }

    function handleOperator(buttonValue){
        setOperator(buttonValue)
        if(isOperator()){
            handleEqual();
        }
    }
    

    function displaySecondValue(buttonValue){
        if(isOperator() && (typeof buttonValue === "number" || buttonValue==='.' )){
            setSecondValue(prevValue => {return trimFirstZero(prevValue + buttonValue)})
        }
    }

    function handleEqual(){
            setValue(math.evaluate(`${value}${operator}${secondValue}`).toString())
            setSecondValue("0")
    }


//--------------------------------------------------------------------------------------------------------------------------------------------    

    function isOperatorPressed(string){
        return ['+','-','*','/','.','='].some((value) => {
            return value===string
        })
    }

    function isOrangePressed(string){
        return ['+','-','*','/'].some((value) => {
            return value===string
        })
    }

    function changeState(number){
        if(!isOperator()){
            setValue((prevValue) =>{return trimFirstZero(prevValue+number)})
        }
        else{
            setSecondValue((prevValue) =>{return trimFirstZero(prevValue+number)})
        }
    }

    
    function displayText(buttonValue){
        if(isOperatorPressed(buttonValue)){
            if(isOrangePressed(buttonValue)){
                setOperator(buttonValue)
            }
            if(buttonValue === '='){
                
            }
            if(buttonValue === '.'){

            }
        }
        else{
            changeState(buttonValue)
        }
    }


  

    function clearState(){
        setValue("0")
        setOperator("")
        setSecondValue("0")
    }

    return (<div className="main">
    <Screen value={secondValue !=="0" ? secondValue : value} />
    <div className="wrapper">
     {(keys.map((buttonValue, index) => <Button key={index} id={index} text={buttonValue} handleClick={() => {displayText(buttonValue)}} />))}
     <button className="clear" onClick={clearState}>Clear</button>
    </div>
    
    </div>)
}

/**
 * 
 * @param {string} string 
 * @returns 
 */
function trimFirstZero(string){
    if(string[0]==='0' && !string.includes('.')){
        return string.substring(1)
    }
    return string
}