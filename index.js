var container = document.querySelector('.container'); 
var button = document.getElementById('clearButton'); 


function addDivs(numberOfDivsToCreate) {
    var gridCellDimension = ((600 / numberOfDivsToCreate) -2).toFixed(2);
    var gridSize = Math.pow(numberOfDivsToCreate,2);


    while (gridSize >0) {
        var newDiv = document.createElement('div');
        container.appendChild(newDiv)
        newDiv.classList.add('grid')
    }
}