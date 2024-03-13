import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrl: './edit-appareil.component.scss',
})
export class EditAppareilComponent {
  defaultOnOff = 'éteint';

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
