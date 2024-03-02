// importation de OnInit, ActivatedRoute et AppareilService
import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrl: './single-appareil.component.scss',
})

// implémentation de l'interface OnInit
export class SingleAppareilComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'status';

  // injection de AppareilService et ActivatedRoute
  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute
  ) {}

  // initialisation des propriétés name et status en utilisant l'id de l'ActivatedRoute et la méthode getAppareilById() de l'AppareilService
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const dd: number = Number(id);
    this.name = this.appareilService.getAppareilById(dd).name;
    this.status = this.appareilService.getAppareilById(dd).status;
  }
}
