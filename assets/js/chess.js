/* jshint esversion: 11, jquery: true */
// Inserting images
function insertImages() {
    document.querySelectorAll('.square').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'w-pawn' || image.innerText == 'b-pawn') {
                image.innerHTML = `${image.innerText} <img class='all-img' src="assets/images/${image.innerText}.png" alt="${image.innerText}">`;
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
    const color = document.querySelectorAll('.square')

    color.forEach((color => {
        getId = color.id;
        arr = Array.from(getId);
        arr.shift();
        aside = eval(arr.pop());
        aup = eval(arr.shift());
        a = aside + aup;

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(209, 139, 71)';
        } else {
            color.style.backgroundColor = 'rgb(255, 206, 158)';
        }
    }));
}

colorBoard();