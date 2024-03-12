// importation de l'interface OnDestroy
import { Component, OnDestroy, OnInit } from '@angular/core';
// importation de Subscription depuis rxjs
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  // ajout d'une propriété de type Subscription
  secondes!: number;
  counterSubscription!: Subscription;

  ngOnInit() {
    // création de l'Observable
    const counter = interval(1000);
    // affichage de la valeur émise par l'Observable. Stockage de l'exécution de la méthode subscribe() dans l'objet (destructible) counterSubscription
    this.counterSubscription = counter.subscribe((value: number) => {
      this.secondes = value;
    });
  }

  ngOnDestroy() {
    // destruction de l'objet counterSubscription (pour éviter les bugs du comportement infini du compteur)
    this.counterSubscription.unsubscribe();
  }
}
