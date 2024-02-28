import { Component } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // par défaut, l'user n'est pas authentifié
  isAuth = false;

  // simulation d'aller chercher la date au backend (sur un serveur)
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 4000);
  });

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

  constructor(private appareilService: AppareilService) {
    // simulation de la prcédure d'authentification de l'user
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  // méthode de simulation de tout allumer d'un seul coup
  onOnAll() {
    alert('On allume tout !');
  }
}
