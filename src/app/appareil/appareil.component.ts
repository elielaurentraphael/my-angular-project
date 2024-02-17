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
}
