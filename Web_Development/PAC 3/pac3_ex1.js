// Emmgatatzem el nombre d'enters aleatoris que es volen mostrar.
var numInts = 10;

// Creem una llist buida per emmagatzemar els nombres aleatoris.
var randomIntsList = [];

// Iterem en un bucle que genera nombres aleatoris i comprova si ja hi son a la llista.
while (randomIntsList.length < numInts) {
    
    // Genera un enter aleatori entre 1 i 20.
    newRandomInt = Math.floor(Math.random() * 20) + 1;
    
    // Comprova si l'enter ja és a la llista.
    if (randomIntsList.indexOf(newRandomInt) < 0) {
        
        // Si l'enter no hi és, l'afegeix.
        randomIntsList.push(newRandomInt);
    }
}

// Es mostren els 10 nombres enters aleatoris diferents en un alert.
alert(randomIntsList);

        