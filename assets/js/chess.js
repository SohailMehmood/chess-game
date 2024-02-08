// Inserting images
function insertImages() {
    document.querySelectorAll('.square').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
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