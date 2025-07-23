function createGrid(size = 16) {
    const gridContainer = document.querySelector('#grid-container');

    for (let row = 0; row < size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        gridRow.id = `row-${row}`;
        
        for (let col = 0; col < size; col++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.id = `square-row-${row}-col-${col}`;
            gridRow.appendChild(square);
        }

        gridContainer.appendChild(gridRow);
    }
}

createGrid();