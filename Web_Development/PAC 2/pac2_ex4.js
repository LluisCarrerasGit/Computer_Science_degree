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


