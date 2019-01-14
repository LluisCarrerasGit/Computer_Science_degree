// Es crea un objecte anima que disposa d'un conjunt
//de propietats relacionades amb el moviment
var anima = new Object();

//Se inicialitza l'objecte anima
function initAnima() {
    anima = {capa:"", valorX:0, valorY:0, finX:0, finY:0, pasoX:0, pasoY:0,
    distX:0, distY:0, MoviX:0, MoviY:0, vel:1, cami:1, interval:null };
}

// Es defineix la funció animaRecta
function animaRecta(capa, iniciX, iniciY, finalX, finalY, pas) {
    initAnima();
    anima.capa = capa;
    anima.valorX = iniciX;
    anima.valorY = iniciY;
    anima.finX = finalX;
    anima.finY = finalY;
    anima.distX = Math.abs(finalX - iniciX);
    anima.distY = Math.abs(finalY - iniciY);
    anima.vel = (pas) ? pas : 1;
    //S'assigna la posició inicial de l'element
    document.getElementById(capa).style.left = iniciX + "px";
    document.getElementById(capa).style.top = iniciY + "px";
    //Es calcula la longitud de la línea entre l'inici i el final de les coordenades
    anima.cami = Math.sqrt((Math.pow((iniciX - finalX), 2)) + (Math.pow((iniciY - finalY), 2)));
    //Es calcula la mida en píxels dels passos al llarg dels eixos
    anima.pasX = parseInt(((anima.finX - anima.valorX) / anima.cami) * anima.vel);
    anima.pasY = parseInt(((anima.finY - anima.valorY) / anima.cami) * anima.vel);
    //S'inicia la crida respectiva a l'animació
    anima.interval = setInterval("executaAnimacio()", 10);
}

// Calcula els passos següents i els assigna a les propietats
function executaAnimacio() {
    if ((anima.MoviX + anima.pasX) <= anima.distX && (anima.MoviY + anima.pasY) <= anima.distY) {
        var x = anima.valorX + anima.pasX;
        var y = anima.valorY + anima.pasY;
        document.getElementById(anima.capa).style.left = x + "px";
        document.getElementById(anima.capa).style.top = y + "px";
        anima.MoviX += Math.abs(anima.pasX);
        anima.MoviY += Math.abs(anima.pasY);
        anima.valorX = x;
        anima.valorY = y;
    } else {
        document.getElementById(anima.capa).style.left = anima.finX + "px";
        document.getElementById(anima.capa).style.top = anima.finY + "px";
        clearInterval(anima.interval);
    }
}

// Llegeix les coordenades i mou la imatge d'acord a aquests valors llegits.
function animaRectaDefault() {
    var x_inicial = parseInt(coordinatesForm.x_inicial.value);
    var y_inicial = parseInt(coordinatesForm.y_inicial.value);
    var x_final = parseInt(coordinatesForm.x_final.value);
    var y_final = parseInt(coordinatesForm.y_final.value);
    animaRecta("imatge", x_inicial, y_inicial, x_final, y_final, 3);
}

