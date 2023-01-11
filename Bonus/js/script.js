
let gridContainer = document.querySelector('.grid-container');
const playButton = document.querySelector('#play-button');
const level = document.querySelector('#level');

// richiamo la funzione che mi genera la grilgia
const newGrid = cellGeneratorEasy (); 

// utilizzo il playButton per resettare la griglia 
playButton.addEventListener('click',
    function() {

        // al play rimuovo la vecchia griglia prima di crearne una nuova
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);
          }

        if (level.value == 'easy') {  
        // richaimo la funzione per generare la nuova griglia  
            const easyLevel = cellGeneratorEasy();  
        }
        else if (level.value == 'medium') {  
            // richaimo la funzione per generare la nuova griglia  
            const mediumLevel = cellGeneratorMedium();  
        }
        else {
            const hardLevel = cellGeneratorHard();  
        }    
    }
)


// Dichiaro la funzione che genera la griglia "FACILE"
function cellGeneratorEasy () {
    // uso un ciclo for per generare le celle  
    for (let i = 1; i <= 100; i++) {

        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.innerHTML = i;
        gridContainer.append(gridCell);

        // creo l'evento per cambiare colore alle celle cliccate
        gridCell.addEventListener('click',
            
            function() {
                console.log('numero cliccato: ' + i);

                if (gridCell.classList.contains('clicked')) {
                    gridCell.classList.remove('clicked');
                }
                else {
                    gridCell.classList.add('clicked');
                }
            }
        )
    }
}

// Dichiaro la funzione che genera la griglia "MEDIA"
function cellGeneratorMedium () {
    // uso un ciclo for per generare le celle  
    for (let i = 1; i <= 81; i++) {

        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.innerHTML = i;
        gridContainer.append(gridCell);

        // creo l'evento per cambiare colore alle celle cliccate
        gridCell.addEventListener('click',
            
            function() {
                console.log('numero cliccato: ' + i);

                if (gridCell.classList.contains('clicked')) {
                    gridCell.classList.remove('clicked');
                }
                else {
                    gridCell.classList.add('clicked');
                }
            }
        )
    }
}

// Dichiaro la funzione che genera la griglia "DIFFICILE"
function cellGeneratorHard () {
    // uso un ciclo for per generare le celle  
    for (let i = 1; i <= 49; i++) {

        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.innerHTML = i;
        gridContainer.append(gridCell);

        // creo l'evento per cambiare colore alle celle cliccate
        gridCell.addEventListener('click',
            
            function() {
                console.log('numero cliccato: ' + i);

                if (gridCell.classList.contains('clicked')) {
                    gridCell.classList.remove('clicked');
                }
                else {
                    gridCell.classList.add('clicked');
                }
            }
        )
    }
}


