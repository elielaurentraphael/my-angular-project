import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // par défaut, l'user n'est pas authentifié
  isAuth = false;

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

  constructor() {
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
