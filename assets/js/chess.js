/* jshint esversion: 11, jquery: true */
// Inserting images
function insertImages() {
    document.querySelectorAll('.square').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'w-pawn' || image.innerText == 'b-pawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pawn' src="assets/images/${image.innerText}.png" alt="${image.innerText}">`;
                image.style.cursor = 'pointer';
            } else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="assets/images/${image.innerText}.png" alt="${image.innerText}">`;
                image.style.cursor = 'pointer';
            }
        }
    });
}

insertImages();

//Coloring the board
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
        if (square.innerText.length !== 0) {
            if (square.innerText == 'w-pawn' || square.innerText == 'b-pawn') {
                square.style.backgroundColor = 'rgb(255, 0, 0)';
            }
        }
    });
});