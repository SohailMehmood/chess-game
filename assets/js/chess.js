/* jshint esversion: 11, jquery: true */

let selectedPiece = null;

// Inserting images
function insertImages() {
    document.querySelectorAll('.square').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'w-pawn' || image.innerText == 'b-pawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pawn' src="assets/images/${image.innerText}.png" alt="${image.innerText}">`;
                image.style.cursor = 'pointer';
                image.dataset.hasMoved = 'false';
                image.dataset.piece = image.innerText; // Add this line
            } else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="assets/images/${image.innerText}.png" alt="${image.innerText}">`;
                image.style.cursor = 'pointer';
                image.dataset.piece = image.innerText; // Add this line
            }
        }
    });
}

insertImages();

// Coloring the board
function colorBoard() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;

        if ((isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol)) {
            square.style.backgroundColor = 'rgb(209, 139, 71)';
        } else {
            square.style.backgroundColor = 'rgb(255, 206, 158)';
        }
    });
}

colorBoard();

// Adding event listeners to the squares
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        if (square.dataset.piece) {
            if (square.dataset.piece == 'w-pawn' || square.dataset.piece == 'b-pawn') {
                selectedPiece = square.dataset.piece;
                const isFirstMove = square.dataset.hasMoved === 'false';
                highlightMoves(square, isFirstMove);
                square.dataset.hasMoved = 'true';
            }
        }
    });
});

function highlightMoves(square, isFirstMove) {
    const index = Array.from(square.parentNode.children).indexOf(square);
    const row = Math.floor(index / 8);
    const col = index % 8;

    if (selectedPiece == 'w-pawn') {
        if (isFirstMove && isEmptySquare(row - 2, col)) {
            highlightSquare(row - 2, col);
        }
        if (isEmptySquare(row - 1, col)) {
            highlightSquare(row - 1, col);
        }
        if (isEnemyPiece(row - 1, col - 1)) {
            highlightCapture(row - 1, col - 1);
        }
        if (isEnemyPiece(row - 1, col + 1)) {
            highlightCapture(row - 1, col + 1);
        }
    } else if (selectedPiece == 'b-pawn') {
        if (isFirstMove && isEmptySquare(row + 2, col)) {
            highlightSquare(row + 2, col);
        }
        if (isEmptySquare(row + 1, col)) {
            highlightSquare(row + 1, col);
        }
        if (isEnemyPiece(row + 1, col - 1)) {
            highlightCapture(row + 1, col - 1);
        }
        if (isEnemyPiece(row + 1, col + 1)) {
            highlightCapture(row + 1, col + 1);
        }
    }
}


function highlightSquare(row, col) {
    if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const square = document.querySelector(`.row:nth-child(${row + 1}) .square:nth-child(${col + 1})`);
        square.style.backgroundColor = 'rgb(0, 255, 0)';
    }
}

function highlightCapture(row, col) {
    if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const square = document.querySelector(`.row:nth-child(${row + 1}) .square:nth-child(${col + 1})`);
        square.style.backgroundColor = 'rgb(255, 0, 0)';
    }
}

function isEmptySquare(row, col) {
    if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const square = document.querySelector(`.row:nth-child(${row + 1}) .square:nth-child(${col + 1})`);
        return !square.dataset.piece;
    }
    return false;
}

function isEnemyPiece(row, col) {
    if (row >= 0 && row < 8 && col >= 0 && col < 8) {
        const square = document.querySelector(`.row:nth-child(${row + 1}) .square:nth-child(${col + 1})`);
        return square.dataset.piece && square.dataset.piece != selectedPiece;
    }
    return false;
}