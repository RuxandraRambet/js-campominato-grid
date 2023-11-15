'use strict';
const board = document.querySelector('.board');
const playButton = document.querySelector('.play-btn'); 

// funzione che crea elemento
function myCreateElement(tag, className, content){
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    return element;
}

// Creazione elementi html

for( let i = 1; i <= 100; i++){
    const myElement = myCreateElement('div','cell', i);
    myElement.addEventListener('click', function(){
        console.log(i); //stampo il numero della cella cliccata
        myElement.classList.add('active-cell') // cambio colore della cella cliccata
    });
    board.append(myElement);
    
}
// Click al bottone

playButton.addEventListener('click', function(){
    if(board.classList.contains('hidden')){
        board.classList.remove('hidden')
    }
});