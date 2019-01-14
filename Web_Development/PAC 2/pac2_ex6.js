// Es demana el nom del jugador per primera vegada.
var nom1 = prompt("Introdueix el teu nom: ");


// Es defineix una variable per la puntuació total.
var puntuacioTotal = 0;

// Iterem sobre les 3 partides.
for (var i = 0; i < 3; i++) {
    
    // Es defineixen unes variables que són útils pel desenvolupament del joc.
    var intentsPossibles = 3;
    var intentActual = 1;
    var puntuacio = 8;

    // Es crea un bucle while que podrà iterar fins a 3 vegades.
    while (intentActual <= intentsPossibles) {
        
        // Es demana un nombre al jugador i es guarda en una variable.
        var intent = parseInt(prompt("Jugada " + (i + 1) + " - Intent " + intentActual + " - Introdueix un nombre entre 0 i 9 :"));
        
        // Es calcula un nombre aleatori entre 0 i 9.
        var nombreDesconegut = Math.floor(Math.random() * 10);
        
        // Si el jugador encerta el nombre desconegut, apareix un missatge que diu que
        // ha encertat i mostra la puntuació obtinguda.
        if (intent == nombreDesconegut) {
            alert("Has encertat!!!\nHas obtingut " + puntuacio + " punts.")
            break;
        }
        
        // S'actualitzen les variables.
        intentActual += 1;
        puntuacio /= 2;
        
        // Si tenim que s'ha superat el nombre d'intents permesos s'acaba el joc, i es 
        // mostra un missatge.
        if (intentActual > intentsPossibles) {
            puntuacio = 0;
            alert("No has encertat el nombre desconegut. La jugada " + (i + 1) + " ha acabat.\nHas obtingut 0 punts.");
        }  
    }
    
    // S'actualitza la puntuació total.
    puntuacioTotal += puntuacio;  
}

// Es mostra un missatge amb la puntuació final.
alert("Has obtingut un total de " + puntuacioTotal + " punts.");

// Es demana el nom del jugador per primera vegada.
var nom2 = prompt("Introdueix el teu nom: ");

// Comprova si ja hi ha dades a localStorage.
if (localStorage.length > 0) {
    var nomGuardat = localStorage.nom;
    
    // Comprova que el nom del jugador és el que està guardat.
    if (nomGuardat == nom2) {
        
        // En cas afirmatiu, mostra la finestra on mostra la puntuació anterior i demana si es vol actualitzar.
        var puntsAnteriors = parseInt(localStorage.punts);
        var volActualitzar = prompt(nom2 + ", fins ara tenies " + puntsAnteriors + " punts, vols actualitzar? [s/n]");
        
        // Si vol actualitzar, s'actualitza la puntuació.
        if (volActualitzar == "s" || volActualitzar == "S") {
            var puntsActualitzats =  puntsAnteriors + puntuacioTotal;
            localStorage.punts = puntsActualitzats;
        }
        
        // Apareix un missatge amb la puntuació actual.
        alert(nom2 + ", ara tens " + localStorage.punts + " punts.")
    }

// En cas de que a localStorage no hi hagi dades, guarda el nom i la puntuació.
} else {
    localStorage.nom = nom2;
    localStorage.punts = puntuacioTotal;
}



    

