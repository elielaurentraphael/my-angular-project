// importation de l'interface OnInit depuis angular/core
import { Component, OnInit } from '@angular/core';
// importation du AuthService depuis son dossier
import { AuthService } from '../services/auth.service';
// importation de Router depuis angular/router
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
// implémentation de l'interface OnInit dans AuthComponent
export class AuthComponent implements OnInit {
  // création d'une propriété locale authStatus de type boolean
  authStatus!: boolean;

  // injection de AuthService dans AuthComponent, injection de Router (pour la navigation programmatique)
  constructor(private authService: AuthService, private router: Router) {}

  // authStatus sera toujours égale à isAuth (isAuth = false -> authStatus = false; isAuth = true -> authStatus = true)
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  // méthode d'appel de la méthode signIn()
  onSignIn() {
    this.authService.signIn().then(() => {
      // mise à jour de la propriété locale authStatus
      this.authStatus = this.authService.isAuth;
      // redirection de l'user (car il est authentifié) vers la route des appareils
      this.router.navigate(['appareils']);
    });
  }

  // méthode d'appel de la méthode signOut()
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
