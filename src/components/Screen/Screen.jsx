import React from "react";
import './styles.css'

export default function Screen(props){
    return <div className="screen">
    <h1 className="text-display">{props.value}</h1>
  </div>
}