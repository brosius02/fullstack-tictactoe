class Board {
    constructor() {
        this.cells = [
            [ ' ', ' ', ' '],
            [ ' ', ' ', ' '],
            [ ' ', ' ', ' '],
        ];
    }

    print() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                process.stdout.write(this.cells[i][j] + (j < 2 ? "|" : "\n"));
            }
    
            if (i < 2) {
                console.log("-+-+-");
            }
        }
    }

    isCellSelected(x, y) {
        return this.cells[y][x] !== ' ';
    }

    takeTurn(x, y) {
        this.cells[y][x] = 'X';
    }

    takeComputersTurn() {
        let availableCells = this.getAvailableCells();
        let randomCell = availableCells[Math.floor(Math.random() * Math.floor(availableCells.length))];
        this.cells[randomCell[1]][randomCell[0]] = 'O';
    }

    getAvailableCells() {
        let availableCells = [];
    
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.cells[j][i] == ' ') {
                    availableCells.push([ i, j ]);
                }
            }
        }
    
        return availableCells;
    }  
    
    getWinner() {
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
                combo[j] = this.cells[combos[i][j][1]][combos[i][j][0]];
            }
    
            if (combo[0] != ' ' && combo[0] == combo[1] && combo[1] == combo[2])
            {
                return combo[0];
            }
        }
    
        return this.getAvailableCells().length == 0 ? 'Z' : null;
    }
}

module.exports = Board;