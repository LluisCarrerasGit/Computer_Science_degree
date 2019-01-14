// Classe que crea una baralla de cartes.
function Baralla () {
    
    // Es crea la baralla i s'emmagatzema en una llista.
    var pals = ["bastos", "copes", "espases", "ors"];
    var baralla = [];
    for (i = 0; i < pals.length; i++) {
        for (j = 1; j < 11; j++) {
            var elNombre = j;
            var elPal = pals[i];
            var novaCarta = new Carta(elNombre, elPal);
            baralla.push(novaCarta);
        }
    }
    
    //Funcions getters i setters.
    this.getBaralla= function() {
        return baralla;
    }
    
    this.setBaralla = function(novaBaralla) {
        baralla = novaBaralla;
    } 
}

// Mètode que barreja la baralla. Es crea una baralla buida i es va omplint triant cartes
// de la baralla original.
Baralla.prototype.barrejar = function() {
    var barallaOrdenada = this.getBaralla();
    var barallaDesordenada = [];
    while(barallaOrdenada.length > 0) {
        var indexAleatori = Math.floor(Math.random() * barallaOrdenada.length);
        var cartaTriada = barallaOrdenada.splice(indexAleatori, 1);
        barallaDesordenada.push(cartaTriada);
    }   
    this.setBaralla(barallaDesordenada);
}

// Classe que crea una carta.
function Carta (elNombre, elPal) {
    var nombre = elNombre;
    var pal = elPal;
    var nom = elNombre.toString() + " " + elPal;
    
    // Mètodes getters i setters.
    this.getNombre = function() {
        return nombre;
    }
    
    this.getPal = function() {
        return pal;
    }
    
    this.getNom = function() {
        return nom;
    }
}

// Classe que crea un joc nou.
function Joc() {
    // Es demana el nombre de jugadors i es guarda en una variable.
    var nombreJugadors = parseInt(prompt("Introdueix el nombre de jugadors:"));
	
    // Es creen els jugadors i es guarden en una llista.
    var jugadors = [];
    for (var i = 0; i < nombreJugadors; i++) {
        var nomNouJugador = "Jugador " + i.toString();
        var nouJugador = new Jugador(nomNouJugador);
        jugadors.push(nouJugador);
    }
     // S'estableix el màxim dnombre de repeticions, que segons l'enunciat és 3. 
    maxRepeticions = 3;
    
    // S'itera sobre cada jugador.
    for (var i = 0; i < jugadors.length; i++) {
        
        var jugador = jugadors[i];
        
        // Variable que apunta a la darrera carta de la baralla del jugador.
        var index = jugador.getBaralla().getBaralla().length - 1;
        
        // Variable on es guarden les cartes que es van extraient.
        var cartesExtretes = [];
        
        // Bucle que itera fins que s'assoleixen tres cartes del mateix nombre.
        while (index >= 0) {
            
            //S'obté la darrera carta que encara no s'ha extret.
            var carta = jugador.getBaralla().getBaralla()[index][0];
            
            // Variable en la que es guarda el nombre de la carta. 
            var nombre = carta.getNombre();
            
            // S'obté el nombre de cartes que ja s'han tret amb al mateix nombre que la darrera carta extreta.
            var repeticions = jugador.getRepeticionsPerIndex(nombre);
            
            // S'augmenta en una unitat el nombre de cartes amb el mateix nombre que la darrera carta extreta,
            // per tenir en compte precisament aquesta darrera carta.
            repeticions += 1;
            
            // S'actualitza aquest valor en la corresponent variable del jugador.
            jugador.actualitzaRepeticions(nombre, repeticions);
            
            // S'obté l'array de repeticions del jugador. Aquest array té a cada índex el nombre de cartes que s'han
            // extret amb cada nombre.
            var repeticionsArray = jugador.getRepeticions();
            
            // La darrera carta extreta s'afegeix a la llista de les cartes extretes. 
            cartesExtretes.push(carta);
             
            // Accions que es porten a terme quan s'assoleix el fet de que s'han tret 3 cartes amb el mateix nombre.
            if ((Math.max(...repeticionsArray) >= maxRepeticions)) {
                
                // S'emmagatzema a WebStorage el nom del jugador.
                var storageFieldDelNomJugador = "Nom del jugador " + i.toString();
                var storageValueDelNomJugador = jugador.getNom();
                localStorage.setItem(storageFieldDelNomJugador, storageValueDelNomJugador);
                
                // Es crea un string amb el nom de les cartes extretes, separades per comes.
                var missatgeCartesExtretes = "";
                for (var j = 0; j < cartesExtretes.length; j++) {
                    var cartaExtreta = cartesExtretes[j];
                    missatgeCartesExtretes += cartaExtreta.getNom() + ", ";
                }
                // S'el·limina la darrera coma.
                missatgeCartesExtretes = missatgeCartesExtretes.slice(0, missatgeCartesExtretes.length - 2);
                
                // S'emmagatzema a WebStorage el string amb les cartes extretes.
                var storageFieldCartesExtretes = "Cartes extretes pel jugador " + jugador.getNom();
                var storageValueCartesExtretes = missatgeCartesExtretes;
                localStorage.setItem(storageFieldCartesExtretes, storageValueCartesExtretes);
                
                // S'emmagatzema a WebStorage el nombre de cartes extretes.
                var storageFieldNumCartesExtretes = "Nombre de cartes extretes pel jugador " + jugador.getNom();
                var storageValueNumCartesExtretes = cartesExtretes.length;
                localStorage.setItem(storageFieldNumCartesExtretes, storageValueNumCartesExtretes);
                
                break;
            }
            index -= 1;   
        }
    }
    
    // S'itera sobre cada jugador.
    for (var i = 0; i < jugadors.length; i++) {
        var jugador = jugadors[i];
        
        // Es recuperen de WebStorage el nom del jugador, les cartes extretes i el nombre de cartes extretes.
        var nom = localStorage.getItem("Nom del jugador " + i.toString());
        var cartesExtretes = localStorage.getItem("Cartes extretes pel jugador " + jugador.getNom());
        var numCartesExtretes = localStorage.getItem("Nombre de cartes extretes pel jugador " + jugador.getNom());
        
        // S'escriu al web el nom del jugador.
        document.write("<p>" + "Nom del jugador: <b>" + nom + "</b></p>");
        
        // S'escriu al web la llista de cartes extretes.
        document.write("<p>" + "Cartes extretes pel jugador " + nom + ":</p>");
        document.write("<p><b>" + cartesExtretes + ":</b></p>");
        
        // Es crea un string que fa que al web es mostrin imatges de les cartes extretes.
        var missatgeCartesExtretes = "<p>";
        var cartesExtretesArray = cartesExtretes.split(", ");
        for (var j = 0; j < cartesExtretesArray.length; j++) {
            var cartaExtreta = cartesExtretesArray[j];
            var nombre = parseInt(cartaExtreta.split(" ")[0]);
            var pal = cartaExtreta.split(" ")[1];
            missatgeCartesExtretes += "<img src=\"baralla/" + pal + "/" + nombre + ".jpg\">";
        }
        missatgeCartesExtretes += "</p>";
        
        // Es mostren al web les imatges de les cartes extretes.
        document.write(missatgeCartesExtretes);
        document.write("<p>" + "Nombre de cartes extretes pel jugador " + nom + ": <b>" +  numCartesExtretes+ "</b></p>");
        document.write("<br>");
    }    
}

// Classe que crea un jugador.
function Jugador(elNom) {
    var nom = elNom;
    var baralla = new Baralla();
    var repeticions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    baralla.barrejar();
    
    // Mètodes setters i getters.
    this.getBaralla= function() {
        return baralla;
    }
    
    this.getRepeticionsPerIndex = function(index) {
        return repeticions[index];
    }
    
    this.getRepeticions = function() {
        return repeticions;
    }
    
    this.setRepeticions = function(novesRepeticions) {
        repeticions = novesRepeticions;
    }
    
    this.actualitzaRepeticions = function(index, nouValor) {
        repeticions[index] = nouValor;
    }
    
    this.getNom = function() {
        return nom;
    }
    
}

// Es crea un joc nou.
var nouJoc = new Joc();




