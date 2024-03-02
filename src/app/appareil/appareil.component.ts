// Input s'importe depuis angular/core
import { Component, Input } from '@angular/core';
// importation de AppareilService depuis son dossier
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss',
})
export class AppareilComponent {
  // les propriétés personnalisées se déclarent avec le decorator Input
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() indexOfAppareil!: number;
  // ajout d'un id unique obligatoir
  @Input() id!: number;

  // injection de AppareilService dans AppareilComponent
  constructor(private appareilService: AppareilService) {}

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

  // méthode d'appel du service d'allumage individuelle
  onOnOne() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  // méthode d'appel du service d'extinction individuelle
  onOffOne() {
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }
}
