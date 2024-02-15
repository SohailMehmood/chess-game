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

tog = 1

document.querySelectorAll('.box').forEach(item => {


            item.addEventListener('click', function () {

                    if (item.style.backgroundColor == 'greenyellow' && item.innerText.length == 0) {
                        tog = tog + 1
                    } else if (item.style.backgroundColor == 'greenyellow' && item.innerText.length !== 0) {

                        document.querySelectorAll('.box').forEach(i => {
                            if (i.style.backgroundColor == 'blue') {
                                blueId = i.id
                                blueText = i.innerText

                                document.getElementById(blueId).innerText = ''
                                item.innerText = blueText
                                coloring()
                                insertImage()
                                tog = tog + 1

                            }
                        })
                    }



                    getId = item.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    arr.push('0')
                    aup = eval(arr.join(''))
                    a = aside + aup

                    //function to display the available paths for all pieces

                    function whosTurn(toggle) {
                        // PAWN

                        if (item.innerText == `${toggle}pawn`) {
                            item.style.backgroundColor = 'blue';

                            if (tog % 2 !== 0 && aup < 800) {
                                // First move for white pawns
                                if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                                    if (document.getElementById(`b${a + 200}`).innerText.length == 0 && aup < 300) {
                                        document.getElementById(`b${a + 200}`).style.backgroundColor = 'greenyellow';
                                    }
                                }
                                if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                                }
                                if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                                }
                            }

                            if (tog % 2 == 0 && aup > 100) {
                                // First move for black pawns
                                if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                                    if (document.getElementById(`b${a - 200}`).innerText.length == 0 && aup > 600) {
                                        document.getElementById(`b${a - 200}`).style.backgroundColor = 'greenyellow';
                                    }
                                }
                                if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                                }
                                if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                                }
                            }
                            // Second move for pawns
                            if (tog % 2 !== 0 && aup >= 800) {
                                if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                                }
                                if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                                }
                                if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                                }
                            }
                            if (tog % 2 == 0 && aup <= 100) {
                                if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                                }
                                if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                                }
                                if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                                }
                            }
                        }
                    }
                }
            }
        )