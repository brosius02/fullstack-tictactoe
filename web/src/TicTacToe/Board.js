import React, { Component } from 'react';
import './TicTacToe.css';

import Cell from './Cell';

const initialState = {
    board: [
        [ ' ', ' ', ' '],
        [ ' ', ' ', ' '],
        [ ' ', ' ', ' '],
    ],
}

class Board extends Component {
    state = initialState;

    handleCellClick = (x, y) => {
        var oldState = [...this.state.board];
        oldState[x][y] = 'X';

        this.setState({ board: oldState });
    } 

    render() {
        let { board } = this.state;

        return (
            <div className="board">
                {board.map((row, x) => 
                    <div key={x}>
                        {row.map((cell, y) => 
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