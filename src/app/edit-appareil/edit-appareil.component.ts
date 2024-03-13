import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// importer AppareilService et Router
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrl: './edit-appareil.component.scss',
})
export class EditAppareilComponent {
  defaultOnOff = 'éteint';

  // injecter AppareilService et Router
  constructor(
    private appareilService: AppareilService,
    private router: Router
  ) {}

  // méthode pour intégrer le nouvel appareil dans la liste
  onSubmit(form: NgForm) {
    // recupération du champ name du formulaire
    const name = form.value['name'];
    // recupération du champ status
    const status = form.value['status'];
    // enregistrement du nouvel appareil dans la liste
    this.appareilService.addAppareil(name, status);
    // navigation de l'user vers la nouvelle liste
    this.router.navigate(['/appareils']);
  }
}
