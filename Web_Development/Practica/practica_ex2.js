// Fem 60 crides per segon.
var anima = function(callback) { 
    window.setTimeout(callback, 1000/60); 
};
 
//Extablim un canvas i considerem el seu context en 2 dimensions.
var canvas = document.createElement('canvas');
var ampladaCanvas = 600;
var alsadaCanvas = 400;
canvas.width = ampladaCanvas;
canvas.height = alsadaCanvas;
var context = canvas.getContext('2d');

// Establim algunes variables globals.
var radiPilota = 5;
var ampladaRaqueta = 20;
var alsadaRaqueta = 60;
var puntuacio = 0;

// Quan es carrega la pàgina afegim el canvas a la pantalla. 
// Fem una crida a la funció step emprant el mètode anima.
window.onload = function() {
    document.body.appendChild(canvas);
    anima(step);
};

// La funció step actualitza tots els objectes creats, els mostra i es crida a ella mateixa.
var step = function() {
    actualitza();
    mostra();
    anima(step);
};

// Classe que crea una raqueta, amb la seva posició, tamany i velocitat.
function Raqueta(x, y, ampladaRaqueta, alsadaRaqueta) {
    this.x = x;
    this.y = y;
    this.amplada = ampladaRaqueta;
    this.alsada = alsadaRaqueta;
    this.velocitatX = 0;
    this.velocitatY = 0;
}

Raqueta.prototype.mostra = function() {
    context.fillStyle = "#FFFFFF";
    context.fillRect(this.x, this.y, this.amplada, this.alsada);
};

Raqueta.prototype.moure = function(x, y) {
    this.x += x;
    this.y += y;
    this.velocitatX = x;
    this.velocitatY = y;
    if(this.y < 0) { // all the way to the top
        this.y = 0;
        this.velocitatY = 0;
    } else if (this.y + this.alsada > alsadaCanvas) { // all the way to the down
        this.y = alsadaCanvas - this.alsada;
        this.velocitatY = 0;
    }
}

// Classe que crea el jugador.
function Jugador() {
    this.raqueta = new Raqueta(ampladaCanvas - 2 * ampladaRaqueta, (alsadaCanvas - alsadaRaqueta) / 2, ampladaRaqueta, alsadaRaqueta);
    this.marcador = new Marcador(40, 100);
   
    // Es demana el nom del jugador.
    this.nom = prompt("Introdueix el teu nom: ");
    
    // Emmagatzemem el nom i la puntuació.
    localStorage.setItem("Nom", this.nom);
    localStorage.setItem("Puntuacio", "0");
}

Jugador.prototype.mostra = function() {
    this.raqueta.mostra();
    
    // Llegim i emmagatzemem la puntuació.
    var puntuacioActual = localStorage.getItem("Puntuacio");
    localStorage.setItem("Puntuacio", puntuacioActual);
    
    // Mostrem la puntuació llegida.
    this.marcador.mostra(puntuacioActual);
};

Jugador.prototype.actualitza = function() {
    for(var key in teclesPitjades) {
        var tecla = Number(key);
        
        // Comportament quan la tecla pitjada és la fletxa cap amunt.
        if(tecla == 38) {
            this.raqueta.moure(0, -4);
        // Comportament quan la tecla pitjada és la fletxa cap abaix.
        } else if (tecla == 40) {
            this.raqueta.moure(0, 4);
        } else {
            this.raqueta.moure(0, 0);
        }
    }
};

// Classe que crea el marcador.
function Marcador(x, y) {
    //this.type = "text";
    this.x = x;
    this.y = y;
    this.puntuacio = "0"; 
}  

Marcador.prototype.mostra = function(novaPuntuacio) {
    context.font = "100px Arial";
    context.fillStyle = "yellow";
    context.fillText(novaPuntuacio, this.x, this.y); 
}

// Classe que crea la pilota.
function Pilota(x, y) {
    this.x = x;
    this.y = y;
    this.velocitatX = 3;
    this.velocitatY = Math.floor(Math.random() * 7) - 3;
    this.radi = radiPilota;
}

Pilota.prototype.mostra = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radi, 2 * Math.PI, false);
    context.fillStyle = "#FFFFFF";
    context.fill();
};

Pilota.prototype.actualitza = function(raqueta) {
    // Actualitza la posició de la pilota.
    this.x += this.velocitatX;
    this.y += this.velocitatY;
    // Variables que defineixen les vores de la pilota.
    var cantellDretPilota = this.x + radiPilota;
    var cantellSuperiorPilota = this.y - radiPilota;
    var cantellEsquerrePilota = this.x - radiPilota;
    var cantellInferiorPilota = this.y + radiPilota;
    
    // Comportament quan la pilota xoca amb la paret esquerra.
    if(this.x < radiPilota) {
        this.x = radiPilota;
        this.velocitatX = -this.velocitatX;
    // Comportament quan la pilota xoca amb la paret de dalt.
    } else if (this.y < radiPilota) {
        this.y = radiPilota;
        this.velocitatY = -this.velocitatY;
    // Comportament quan la pilota xoca amb la paret de baix.
    } else if (this.y > (alsadaCanvas - radiPilota)) {
        this.y = (alsadaCanvas - radiPilota);
        this.velocitatY = -this.velocitatY;
    }
    
    // Comportament quan el jugador no fer la pilota i aquesta fer la paret dreta.
    if(this.x > ampladaCanvas) {
        this.velocitatX = 3;
        this.velocitatY = Math.floor(Math.random() * 7) - 3;
        this.x = ampladaCanvas / 2;
        this.y = alsadaCanvas / 2;
        localStorage.setItem("Puntuacio", "0");
    }

    // Comportament quan el jugador fer la pilota.
    if (cantellDretPilota >= (ampladaCanvas - 2 * ampladaRaqueta) && cantellSuperiorPilota < (raqueta.y + raqueta.alsada) && cantellInferiorPilota > raqueta.y) {
        this.velocitatX = -3;
        this.velocitatY += (raqueta.velocitatY / 2);
        puntuacio += 1;
        // Llegeix la puntuació emmagatzemada, l'augmenta una unitat i la torna a emmagatzemar.  
        var puntuacioActual = parseInt(localStorage.getItem("Puntuacio"));
        puntuacioActual += 1;
        localStorage.setItem("Puntuacio", puntuacioActual);
    } 
};

// Creem l'objecte teclesPitjades per controlar quina tecla s'ha pitjat.
var teclesPitjades = {};

window.addEventListener("keydown", function(event) {
    teclesPitjades[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
    delete teclesPitjades[event.keyCode];
});

// Funció que actualitza el jugador i la pilota.
var actualitza = function() {
    jugador.actualitza();
    pilota.actualitza(jugador.raqueta);
};

// Funció que mostra el canvas, el jugador i la pilota.
var mostra = function() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, ampladaCanvas, alsadaCanvas);
    jugador.mostra();
    pilota.mostra();
};

// Es crea un jugador.
var jugador = new Jugador();

// Es crea la pilota.
var pilota = new Pilota(ampladaCanvas / 2, alsadaCanvas / 2);