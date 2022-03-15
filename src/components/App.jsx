import React from "react";
import Screen from "./Screen/Screen"
import Button from "./Button/Button";

export default function App(){

    const keys=[7,8,9, 'x', 4, 5, 6, '/', 1, 2, 3, '+', '.', 0, '=', '-']


    return (<div className="main">
    <Screen />
    <div className="wrapper">
     {(keys.map(key => <Button text={key} />))}
    </div>
    </div>)
}
