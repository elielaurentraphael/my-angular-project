import { Component } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrl: './appareil.component.scss',
})
export class AppareilComponent {
  appareilName = 'Machine à laver';
  appareilStatus = 'éteint';

  getStatus() {
    return this.appareilStatus;
  }
}
