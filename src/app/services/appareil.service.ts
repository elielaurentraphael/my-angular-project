// importation de Subject depuis rxjs
import { Subject } from 'rxjs';
export class AppareilService {
  // création du Subject appareilSubject
  appareilSubject = new Subject<any[]>();

  // rendre private l'array appareils
  private appareils = [
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

  // méthode permetant l'accès à la liste des appareils depuis l'extérieur. L'appel de la méthode next(argument) force appareilSubject à émettre l'argument
  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  // méthode qui cherche un appareil par son id, utilisant la méthode find() de l'array appareils
  getAppareilById(nb: number) {
    const appareil = this.appareils.find((appareilObject) => {
      return appareilObject.id === nb;
    });
    if (!appareil) {
      throw new Error('Appareil not found !');
    } else {
      return appareil;
    }
  }

  // méthode pour tout allumer
  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    // faire émettre le Subject pour que les components qui sont souscris à ce Subject verront le changement automatiquement
    this.emitAppareilSubject();
  }

  // méthode pour tout éteindre
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    // faire émettre le Subject pour que les components qui sont souscris à ce Subject verront le changement automatiquement
    this.emitAppareilSubject();
  }

  // méthode d'allumage individuelle
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    // faire émettre le Subject pour que les components qui sont souscris à ce Subject verront le changement automatiquement
    this.emitAppareilSubject();
  }

  // méthode d'extinction individuelle
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    // faire émettre le Subject pour que les components qui sont souscris à ce Subject verront le changement automatiquement
    this.emitAppareilSubject();
  }

  // méthode d'ajout d'un nouvel appareil par l'user
  addAppareil(name: string, status: string) {
    const appareilObject = {
      id: 0,
      name: '',
      status: '',
    };
    // recupérer le nouvel appareil du formulaire
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[this.appareils.length - 1].id + 1;

    // jnscrire le nouvel appareil dans la liste
    this.appareils.push(appareilObject);
    // émettre la nouvelle liste
    this.emitAppareilSubject();
  }
}
