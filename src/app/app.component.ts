import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // par défaut, l'user n'est pas authentifié
  isAuth = false;

  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';

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
