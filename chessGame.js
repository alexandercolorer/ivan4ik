// chessGame.js

// Initial board setup
const board = [
    ['♖', '', '', '', '', '', '', '♖', '', ''],
    ['', '', '', '', '♔', '', '', '', '', ''], // White King (♔) starts at Row 1, Column 4
    ['', '', '♙', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '♟', '', '', '', '', '', '', ''],
    ['♜', '', '', '', '♚', '', '', '', '', '♜']
];

// Draw the chess board
function drawBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 10; col++) { // 10 columns
            const cell = document.createElement('div');
            cell.className = 'cell ' + ((row + col) % 2 === 0 ? 'white' : 'black');
            cell.innerHTML = board[row][col];
            cell.dataset.row = row;
            cell.dataset.col = col;
            boardElement.appendChild(cell);
        }
    }
}

// Check the move
function checkMove() {
    const rowInput = document.getElementById('rowInput').value;
    const colInput = document.getElementById('colInput').value;

    // Check if the move is valid
    if (parseInt(rowInput) === 3 && parseInt(colInput) === 9) { // 0-indexed (3, 9)
        document.getElementById('message').innerText = "You moved the king to the correct position! Here's your next clue: [insert next clue link here]";
        
        // Update the board to show the king in the correct position
        board[1][4] = ''; // Clear previous position
        board[3][9] = '♔'; // Move king to new position
        drawBoard();
    } else {
        document.getElementById('message').innerText = "Incorrect move! Try again.";
    }
}

// Set up event listener for the move button
document.getElementById('moveButton').onclick = checkMove;

// Draw the board when the page loads
drawBoard();
