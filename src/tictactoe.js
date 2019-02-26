exports.getNewBoard = () => {
    return [
        [ ' ', ' ', ' '],
        [ ' ', ' ', ' '],
        [ ' ', ' ', ' '],
    ];
}

exports.printBoard = (board) => {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            process.stdout.write(board[i][j] + (j < 2 ? "|" : "\n"));
        }

        if (i < 2) {
            console.log("-+-+-");
        }
    }
}

exports.doComputersTurn = (board) => {
    let availableCells = getAvailableCells(board);
    let randomCell = availableCells[Math.floor(Math.random() * Math.floor(availableCells.length))];
    board[randomCell[1]][randomCell[0]] = 'O';
}

const getAvailableCells = (board) => {
    let availableCells = [];

    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (board[j][i] == ' ') {
                availableCells.push([ i, j ]);
            }
        }
    }

    return availableCells;
}

exports.getWinner = (board) => {
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

    for (i = 0; i < 8; i++) {
        let combo = [];

        for (j = 0; j < 3; j++) {
            combo[j] = board[combos[i][j][1]][combos[i][j][0]];
        }

        if (combo[0] != ' ' && combo[0] == combo[1] && combo[1] == combo[2])
        {
            return combo[0];
        }
    }

    return getAvailableCells(board).length == 0 ? 'Z' : null;
}