import React from 'react';
import './TicTacToe.css';

const Cell = (props) => (
    <div className="cell" onClick={props.onClick}>{props.value}</div>
)

export default Cell;