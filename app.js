function createGridRow(row) {
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    gridRow.id = `row-${row}`;

    return gridRow;
}

function createGridSquare(row, col) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.id = `square-row-${row}-col-${col}`;

    square.addEventListener('mouseover', () => {
        // Starts off opacity at 10%. Increments opacity by 10% until 100% reached.
        if (square.style.backgroundColor == '') {
            square.style.opacity = '0.1';
        } else if (parseFloat(square.style.opacity) < 1) {
            square.style.opacity = String(parseFloat(square.style.opacity) + 0.1);
        }

        console.log(square.style.opacity);
        const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = randomColor;
    });

    return square;
}

function createGrid(size = 16) {
    gridContainer.replaceChildren();

    for (let row = 0; row < size; row++) {
        const gridRow = createGridRow(row);

        for (let col = 0; col < size; col++) {
            const square = createGridSquare(row, col);

            gridRow.appendChild(square);
        }

        gridContainer.appendChild(gridRow);
    }
}

function resizeGrid(event) {
    const userInput = prompt('Grid size must be between 1 and 100.\n\nEnter new grid size:');

    createGrid(parseInt(userInput));
}

const gridContainer = document.querySelector('#grid-container');

createGrid();