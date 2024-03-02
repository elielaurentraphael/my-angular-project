import { Component } from '@angular/core';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrl: './single-appareil.component.scss',
})
export class SingleAppareilComponent {
  name: string = 'Appareil';
  status: string = 'status';
}
