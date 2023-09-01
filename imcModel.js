// Ce modèle devrait avoir des méthodes pour enregistrer l'IMC dans la base de données et récupérer l'historique.

class IMC {
    constructor(date, height, weight) {
      this.date = date;
      this.height = height;
      this.weight = weight;
    }
  
    calculateIMC() {
      const heightInMeters = this.height / 100;
      return this.weight / (heightInMeters * heightInMeters);
    }
  }
  
  module.exports = IMC;
  


