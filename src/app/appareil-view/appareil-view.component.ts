import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
// importation de Subscription depuis rxjs
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrl: './appareil-view.component.scss',
})
export class AppareilViewComponent implements OnInit {
  // simulation d'aller chercher la date au backend (sur un serveur)
  lastUpdate: Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 4000);
  });

  tableauDesAppareils!: any[];
  // création de l'objet de souscription
  appareilSubscription!: Subscription;

  // injection de AppareilService dans AppComponent
  constructor(private appareilService: AppareilService) {}

  // angular cherche tableauDesAppareils dans AppareilService
  ngOnInit() {
    // utilisation de l'objet de souscription (souscrire à appareilSubject)
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.tableauDesAppareils = appareils;
      }
    );
    // faire émettre appareilSubject
    this.appareilService.emitAppareilSubject();
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
