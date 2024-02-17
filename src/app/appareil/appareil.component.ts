// Input s'importe depuis angular/core
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss',
})
export class AppareilComponent {
  // les propriétés personnalisées se déclarent avec le decorator Input
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;

  getStatus() {
    return this.appareilStatus;
  }

  // texte de couleur verte si l'appareil est allumé, rouge pour appareil éteint
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else {
      return 'red';
    }
  }
}
