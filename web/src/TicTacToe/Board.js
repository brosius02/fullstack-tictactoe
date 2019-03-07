import React, { Component } from 'react';
import axios from 'axios';
import './TicTacToe.css';

import Cell from './Cell';

const url = "http://localhost:3001";

class Board extends Component {
    state = { cells: [], gameOver: false, winner: null };

    reset = () => {
        axios.post(url + "/game")
        .then(response => {
            this.setState(response.data);
        }, err => {
            console.log(err);
        })
    }

    componentDidMount = () => {
        this.reset();
    }

    handleCellClick = (x, y) => {
        axios.post(url + "/turn", { x: x, y: y })
        .then(response => {
            this.setState(response.data);
        }, err => {
            console.log(err);
        })
    }

    handleResetClick = () => {
        if (this.state.gameOver || window.confirm('Are you sure you want to reset?')) {
            this.reset();
        }
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

    getWinningCombo = (cells) => {
        if (cells === undefined || cells.length === 0) return undefined;

        let combos = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]],
        ];
    
        for (var i = 0; i < 8; i++) {
            let combo = [];
    
            for (var j = 0; j < 3; j++) {
                combo[j] = cells[combos[i][j][1]][combos[i][j][0]];
            }
    
            if (combo[0] !== ' ' && combo[0] === combo[1] && combo[1] === combo[2])
            {
                return combos[i];
            }
        }
    }

    render() {
        let { cells, gameOver, winner } = this.state;
        let winningCombo = this.getWinningCombo(cells);

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
                                    color={winningCombo && winningCombo.find(cell => cell[0] === x && cell[1] === y) ? "green" : gameOver ? "grey" : ""}
                                    value={cell}
                                />
                            )}
                        </div>
                    )}
                </div>
                <span className="status" style={{ color: gameOver ? "grey" : "green" }}>{this.getGameStatus(gameOver, winner)}</span>
                <button className="reset" onClick={this.handleResetClick}>Reset Game</button>
            </div>
        )
    }
}

export default Board