import React from "react";
import './styles.css';


export default function Button(props){

    const greyButtons = val => {
        return typeof val === "number" || val === "." || val === "=" || val === 'C';

    }

    const clear = val => {return val ==='C'}

    return <button onClick={ clear(props.text) ? props.clear : props.handleClick} className={greyButtons(props.text) ? "button" : "orange"}>{props.text}</button>
}