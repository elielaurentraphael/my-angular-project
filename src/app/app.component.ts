import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // par défaut, l'user n'est pas authentifié
  isAuth = false;

  // simulation d'aller chercher la date au backend (sur un serveur)
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 4000);
  });

  tableauDesAppareils!: any[];

  // injection de AppareilService dans AppComponent
  constructor(private appareilService: AppareilService) {
    // simulation de la prcédure d'authentification de l'user
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  // angular cherche tableauDesAppareils dans AppareilService
  ngOnInit() {
    this.tableauDesAppareils = this.appareilService.appareils;
  }

  // AppComponent appelle la méthode switchOnAll() de AppareilService par sa méthode onOnAll()
  onOnAll() {
    this.appareilService.switchOnAll();
  }

  // AppComponent appelle la méthode switchOffAll() de AppareilService par sa méthode onOffAll()
  onOffAll() {
    this.appareilService.switchOffAll();
  }
}
