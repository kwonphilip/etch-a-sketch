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

    return square;
}

function createGrid(size = 16) {
    const gridContainer = document.querySelector('#grid-container');

    for (let row = 0; row < size; row++) {
        const gridRow = createGridRow(row);

        for (let col = 0; col < size; col++) {
            const square = createGridSquare(row, col);

            gridRow.appendChild(square);
        }

        gridContainer.appendChild(gridRow);
    }
}

createGrid();