var container = document.querySelector('.container'); 
var button = document.getElementById('clearButton'); 


function addDivs(numberOfDivsToCreate) {
    var gridCellDimension = ((600 / numberOfDivsToCreate) -2).toFixed(2);
    var gridSize = Math.pow(numberOfDivsToCreate,2);


    while (gridSize >0) {
        var newDiv = document.createElement('div');
        container.appendChild(newDiv)
        newDiv.classList.add('grid')
        newDiv.style.height = gridCellDimension + 'px';
        newDiv.style.width = gridCellDimension + 'px';
        newDiv.style.border = '1px solid black';
        }
    
    var gridCells = document.querySelectorAll('.grid')
    gridCells.forEach(cell => cell.addEventListener('mouseenter',changeColor));
    console.log(gridCellDimensions);
    console.log('Grid successfully created!')
    
}

function changeColor() {
    this.styl.backgroundColor = '#ff9999'
}

button.addEventListener('click', clear); 
window.onload = addDiv(16); 