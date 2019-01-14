function Edifici (elNom, laDescripcio, laAdresa, laInauguracio, elArquitecte, elCost) {
    
    // La pròpia funció que defineix la classe també defineix el constructor.
    
    var nom = elNom;
    var descripcio = laDescripcio;
    var adresa = laAdresa;
    var dataInauguracio = laInauguracio;
    var arquitecte = elArquitecte;
    var cost = elCost;
    
    // A partir d'aquí es defineixen els mètodes getters i setters per accedir a les propietats.
    
    this.getNom = function() {
        return nom;
    }
    
    this.setNom = function(nouNom) {
        nom = nouNom;
    } 

    this.getDescripcio = function() {
        return descripcio;
    }
    
    this.setDescripcio = function(novaDescripcio) {
        decripcio = novaDescripcio;
    }

    this.getAdresa = function() {
        return adresa;
    }
    
    this.setAdresa = function(novaAdresa) {
        adresa = novaAdresa;
    }
    
    this.getDataInauguracio = function() {
        return dataInauguracio;
    }
    
    this.setDataInauguracio = function(novaDataInauguracio) {
        dataInauguracio = novaDataInauguracio;
    }
    
    this.getArquitecte = function() {
        return arquitecte;
    }
    
    this.setArquitecte = function(nouArquitecte) {
        arquitecte = nouArquitecte;
    }
    
    this.getCost = function() {
        return cost;
    }
    
    this.setCost = function(nouCost) {
        cost = nouCost;
    } 
}

// Mètode que mostra en un finestra modal les propietats de l'edifici.
Edifici.prototype.mostrar = function() {
    var message = "";
    message += "Nom: " + this.getNom() + "\n";
    message += "Descripció: " + this.getDescripcio() + "\n";
    message += "Adreça: " + this.getAdresa() + "\n";
    message += "Data d'inauguració: " + this.getDataInauguracio() + "\n";
    message += "Arquitecte: " + this.getArquitecte() + "\n";
    message += "Cost: " + this.getCost() + " euros";
    alert(message);
}

// Creem una instància de la classe i apliquem el mètode mostrar().
var laPedrera = new Edifici("La Pedrera", 
                            "Edifici modernista",
                            "Passeig de Gràcia, 92, Barcelona",
                            1912,
                            "Antoni Gaudí",
                            100000000);
laPedrera.mostrar();


