import React, { Component } from 'react';
import axios from 'axios';
import './TicTacToe.css';

import Cell from './Cell';

const url = "http://localhost:3001";

class Board extends Component {
    state = { cells: [], gameOver: false, winner: null };

    componentDidMount = () => {
        axios.post(url + "/game")
        .then(response => {
            this.setState(response.data);
        }, err => {
            console.log(err);
        })
    }

    handleCellClick = (x, y) => {
        axios.post(url + "/turn", { x: x, y: y })
        .then(response => {
            this.setState(response.data);
        }, err => {
            console.log(err);
        })
    }
    
    getGameStatus = (gameOver, winner) => {
        if (gameOver) {
            if (winner === 'X' || winner === 'O') {
                return "Game Over! Winner: " + winner;
            }
            else {
                return "Game Over! It's A Draw!";
            }
        }
        else {
            return "Game In Progress";
        }
    }

    render() {
        let { cells, gameOver, winner } = this.state;

        return (
            <div>
                <div className="board">
                    {cells.map((row, y) => 
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
                <span className="status" style={{ color: gameOver ? "grey" : "green" }}>{this.getGameStatus(gameOver, winner)}</span>
            </div>
        )
    }
}

export default Board