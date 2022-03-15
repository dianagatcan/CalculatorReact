import React from "react";
import './styles.css'

export default function Screen(props){
    return <div className="screen">
    <h1>{props.value}</h1>
  </div>
}