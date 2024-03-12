// importation de l'interface OnInit
import { Component, OnInit } from '@angular/core';
// importation de l'Observable interval
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // propriété qui stocke la durée de connexion de l'user
  secondes!: number;

  ngOnInit() {
    // création de l'Observable
    const counter = interval(1000);
    // observation de l'Observable
    counter.subscribe(
      // affichage de la valeur émise par l'Observable
      (value: number) => {
        this.secondes = value;
      },
      // dans le cas d'une erreur eventuelle, le message d'erreur remplace l'affichage de la valeur
      (error: any) => {
        console.log('Une erreur a été renconterée !');
      },
      // dans le cas d'une complétion, le message de complétion remplace l'affichage de la valeur
      () => {
        console.log('Observable complétée !');
      }
    );
  }
}
