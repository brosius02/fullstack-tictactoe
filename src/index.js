const express = require('express');
const Board = require('./tictactoe');

const app = express();
app.use(express.json());

const port = 3000;

var board = new Board();

isGameOver = () => board.getWinner() !== null;

getGameState = () => ({ 
    gameOver: isGameOver(), 
    winner: board.getWinner(), 
    cells: board.cells,
});

app.get('/game', (req, res) => {
    res.send(getGameState());
});

app.post('/game', (req, res) => { 
    board = new Board();
    res.send(getGameState());
});

app.post('/turn', (req, res) => {
    if (isGameOver()) {
        return res.sendStatus(409);
    }
    
    let { x, y } = req.body;

    if (isNaN(x) || isNaN(y) || x < 0 || x > 2 || y < 0 || y > 2)
    {
        return res.sendStatus(400);
    }

    if (board.isCellSelected(x, y)) {
        return res.sendStatus(403);
    }

    board.takeTurn(x, y);

    if (isGameOver()) {
        return res.send(getGameState());
    }

    board.takeComputersTurn();
    res.send(getGameState());
});

app.listen(port, () => console.log(`Tic Tac Toe app listening on port ${port}!`));