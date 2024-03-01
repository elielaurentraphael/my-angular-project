// importation de l'interface OnInit depuis angular/core
import { Component, OnInit } from '@angular/core';
// importation du AuthService depuis son dossier
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
// implémentation de l'interface OnInit dans AuthComponent
export class AuthComponent implements OnInit {
  // création d'une propriété locale authStatus de type boolean
  authStatus!: boolean;

  // injection de AuthService dans AuthComponent
  constructor(private authService: AuthService) {}

  // authStatus sera toujours égale à isAuth (isAuth = false -> authStatus = false; isAuth = true -> authStatus = true)
  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  // méthode d'appel de la méthode signIn()
  onSignIn() {
    this.authService.signIn().then(() => {
      alert('connexion reussie !');
      // mise à jour de la propriété locale authStatus
      this.authStatus = this.authService.isAuth;
    });
  }

  // méthode d'appel de la méthode signOut()
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
