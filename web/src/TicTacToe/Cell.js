import React from 'react';
import './TicTacToe.css';

const Cell = (props) => (
    <div className={"cell " + props.color} onClick={props.onClick}>{props.value}</div>
)

export default Cell;