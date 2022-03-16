import React from "react";
import './styles.css';


export default function Button(props){

    const greyButtons = val => {
        return typeof val === "number" || val === "." || val === "=";

    }

    return <button onClick={props.handleClick} className={greyButtons(props.text) ? "button" : "orange"}>{props.text}</button>
}