import React, { Component } from 'react';
import axios from 'axios';
import './TicTacToe.css';

import Cell from './Cell';

const url = "http://localhost:3001";

class Board extends Component {
    state = { board: [] };

    componentDidMount = () => {
        axios.post(url + "/game")
        .then(response => {
            this.setState({ board: response.data.cells });
        }, err => {
            console.log(err);
        })
    }

    handleCellClick = (x, y) => {
        axios.post(url + "/turn", { x: x, y: y })
        .then(response => {
            this.setState({ board: response.data.cells });
        }, err => {
            console.log(err);
        })
    } 

    render() {
        let { board } = this.state;

        return (
            <div className="board">
                {board.map((row, y) => 
                    <div key={y}>
                        {row.map((cell, x) => 
                            <Cell 
                                key={x+y}
                                onClick={() => this.handleCellClick(x, y)} 
                                x={x} 
                                y={y} 
                                value={cell}
                            />
                        )}
                    </div>
                )}
            </div>
        )
    }
}

export default Board