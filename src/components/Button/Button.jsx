import React from "react";
import './styles.css';


export default function Button(props){

    return <button onClick={props.handleClick} className="button">{props.text}</button>
}