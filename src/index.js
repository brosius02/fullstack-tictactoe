const readline = require('readline-sync');
const tictactoe = require('./tictactoe');

var board = [[]];

main();

function main() {
    do {
        console.log("Welcome to QC Coders' Tic TacToe! You're 'X' and you'll go first.");
        board = tictactoe.getNewBoard();
    
        do {
            console.log("\nHere's the current board:\n");
            tictactoe.printBoard(board);

            var input = readline.question("\nEnter your choice in the format 'x,y' (zero based, left to right, top to bottom): ");        
            let x, y;
        
            try {
                let nums = input.split(",");
        
                x = parseInt(nums[0]);
                y = parseInt(nums[1]);
       
                if (isNaN(x) || isNaN(y) || x < 0 || x > 2 || y < 0 || y > 2)
                {
                    throw "\nInvalid input! Try again.";
                }
            } catch(err) {
                console.log(err);
                continue;
            }
            
            if (board[y][x] !== ' ') {
                console.log("\nThat cell is already selected.");
                continue;
            }
        
            board[y][x] = 'X';
            if (tictactoe.getWinner(board) !== null) break;

            console.log("\nComputer is taking its turn...");
            tictactoe.doComputersTurn(board);
        } while (tictactoe.getWinner(board) === null);

        if (tictactoe.getWinner(board) === 'Z') {
            console.log("\nThe game was a draw!");
        } else {
            console.log("\n" + (tictactoe.getWinner(board) === 'X' ? "You're" : "The computer is") + " the winner!");
        }

        console.log("Here's the final board:\n");
        tictactoe.printBoard(board);
    } while (readline.question("\nPress Enter to play again or x + Enter to exit.") === "");
};