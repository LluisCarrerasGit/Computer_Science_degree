// Variable global que controla si la imatge segueix o no al cursor.
letMovements = false;

// Funció que fa que la imatge segueixi al cursor.
function followCursor(event) {
    if (letMovements) {
        var x = event.clientX;
        var y = event.clientY;
        document.getElementById("dilbert").style.left = x;
        document.getElementById("dilbert").style.top = y; 
    }   
}

// Funció que intercanvia el comportament cada vegada que es clica el ratolí.
function letMove(event) {
    letMovements = !(letMovements);
}