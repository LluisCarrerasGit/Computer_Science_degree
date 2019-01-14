// Variable que serveix per saber quantes imatges portem sel·leccionades.
var numImagesSelected = 0

// Funció que intercanvia la posició de dues imatges.
function changeImages(idCapa) {
    // Sel·leccionem la capa que conté la imatge.
    var capa = document.getElementById(idCapa);
    // Prenem les coordenades de la capa sel·leccionada.
    var x_coord = capa.style.left;
    var y_coord = capa.style.top;
    
    // Afegim una vora a la capa sel·leccionada.
    borderFormat = capa.style.borderStyle;
    if (borderFormat == "none") {
        capa.style.borderStyle = "solid";
    } else {
        capa.style.borderStyle = "none";
    }
    
    // Augmentem el nombre de capes sel·leccionades.
    numImagesSelected += 1;
    
    // Si es tracta de la primera capa sel·leccionada, guardem l'identificador de la capa i les seves coordenades
    // en variables que fan referència a la primera imatge.
    if (numImagesSelected == 1) {
        idFirstImage = capa.id;
        xFirstImage = x_coord;
        yFirstImage = y_coord; 
    // Si no es tracta de la primera capa sel·leccionada vol dir que ja en tenim una de sel·leccionada, 
    // per tant guardem l'identificador i les coordenades de la present capa en variables que fan referència
    // a la segona imatge.
    } else {
        idSecondImage = capa.id;
        xSecondImage = x_coord;
        ySecondImage = y_coord;
        
        // Sel·leccionem les dues imatges.
        firstImage = document.getElementById(idFirstImage);
        secondImage = document.getElementById(idSecondImage);
        
        // Intercanviem les posicions de les dues imatgesi treiem les vores.
        firstImage.style.left = xSecondImage;
        firstImage.style.top = ySecondImage;
        firstImage.style.borderStyle = "none";
        
        secondImage.style.left = xFirstImage;
        secondImage.style.top = yFirstImage;
        secondImage.style.borderStyle = "none";
        
        // Reestablim el nombre de imatges sel·leccionades a zero, per si volem tornar a començar.
        numImagesSelected = 0;   
    } 
}

