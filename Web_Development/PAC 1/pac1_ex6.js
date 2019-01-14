// Crea una funció que demana el nombre de vegades que es demanarà un nombre sencer, va guardant
// aquests nombre en un vector, i després de demanar el darrer nombre ordena el vector i el mostra.
function mostra_vector_ordenat() {

    // Mostrem un prompt que demana la quantitat de nombre sencers que tindrà el vector, convertim el valor
    // introduit a un nombre sencer i el guardem en una variable.
    var iteracions = parseInt(prompt("Introdueix la quantitat de nombres sencers que tindrà el vector:",""));

    // Definim un vector i el guardem en una variable.
    var vector = new Array(iteracions);

    // Bucle que demana els nombre.
    for (var i = 0; i < iteracions; i++) {

        // Mostrem un prompt que demana un número sencer que tindrà el vector, convertim el valor
        // introduit a un nombre sencer i el guardem en una variable.
        var num = parseInt(prompt("Introdueix el nombre sencer " + (i + 1) + " d'un total de " + iteracions + " nombres:"));

        // Afegim el nombre sencer en el vector.
        vector[i] = num;
    }

    // Ordenem els valors que conté el vector.
    vector.sort();

    // Mostrem el vector ordenat.
    alert("El vector ordenat és: " + vector);
}
