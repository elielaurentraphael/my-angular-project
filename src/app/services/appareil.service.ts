export class AppareilService {
  // les objets variables sont contenus dans un array
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'allumé',
    },
    {
      id: 3,
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
