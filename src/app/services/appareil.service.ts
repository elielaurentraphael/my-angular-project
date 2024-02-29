export class AppareilService {
  // les objets variables sont contenus dans un array
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      name: 'Télévision',
      status: 'allumé',
    },
    {
      name: 'Ordinateur',
      status: 'éteint',
    },
  ];

  // méthode pour tout allumer
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  // méthode pour tout éteindre
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  // méthode d'allumage individuelle
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  // méthode d'extinction individuelle
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
