// Generem un bucle que iterarà fins que s'introdueixi una data amb el format adient.
do {
    // Es demana una data i es guarda en una variable.
    var data = prompt("Introdueix una data amb el format dd/mm/aaaa:");

    // Definim el patró que haurà de complir la data.
    var patro = new RegExp("[0-9]{2}/[0-9]{2}/[0-9]{4}");

    // Es comprova si la data introduida té el format dd/mm/aaaa.
    var esDataValida = data.search(patro);


} while (esDataValida == -1)

// Establim la data d'avui.
var avui = new Date();
var avui = new Date(avui.getFullYear(), avui.getMonth(), avui.getDate());

// Construim una data a partir de la cadena que hem introduit.
diaData = parseInt(data.substring(0, 2));
mesData = parseInt(data.substring(3, 5));
anyData = parseInt(data.substring(6));
novaData = new Date(anyData, mesData - 1, diaData);

// Averigüem quina data és més gran.
avuiEnMilisegons = avui.getTime();
dataEnMilisegons = novaData.getTime();
if (avuiEnMilisegons >= dataEnMilisegons) {
    dataMesModerna = avui;
    dataMesAntiga = novaData;
} else {
    dataMesModerna = novaData;
    dataMesAntiga = avui;
}

// Extraiem el dia, el mes i l'any de la data més moderna.
var diaDataModerna = dataMesModerna.getDate();
var mesDataModerna = dataMesModerna.getMonth();
var anyDataModerna = dataMesModerna.getFullYear();

// Extraiem el dia, el mes i l'any de la data més antiga.
var diaDataAntiga = dataMesAntiga.getDate();
var mesDataAntiga = dataMesAntiga.getMonth();
var anyDataAntiga = dataMesAntiga.getFullYear();

// Definim variables per la diferència de dies, mesos i anys.
var dies = 0;
var mesos = 0;
var anys = 0;

// Anem afegint dies si cal a la data més antiga fins que el dia 
// coincideixi en ambdues dates.
while ((diaDataAntiga != diaDataModerna)) {
    dataMesAntiga.setDate(dataMesAntiga.getDate() + 1);
    dies += 1;
    diaDataAntiga = dataMesAntiga.getDate();
}

// Anem afegint mesos si cal a la data més antiga fins que 
// el mes coincideixi en ambdues dates.
while ((mesDataAntiga != mesDataModerna)) {
    dataMesAntiga.setMonth(dataMesAntiga.getMonth() + 1);
    mesos += 1;
    mesDataAntiga = dataMesAntiga.getMonth();
}

// Calculem la diferencia d'anys.
anys = dataMesModerna.getFullYear() - dataMesAntiga.getFullYear();

// Definim un array amb els noms dels mesos.
var nomsDelsMesos = new Array("Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", 
                   "Setembre", "Octubre", "Novembre", "Desembre");

// Definim el missatge que es mostrarà.
var missatge = "Entre la data d'avui i la data de " + novaData.getDate() + "-" +
                nomsDelsMesos[novaData.getMonth()] + "-" + novaData.getFullYear() + " hi ha:\n" +
                anys + " anys, " + mesos + " mesos i " + dies + " dies.";

alert(missatge);







    






