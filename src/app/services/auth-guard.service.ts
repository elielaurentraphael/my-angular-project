// un guard est un service angular qui prend une forme spécifique et, qui sera exécuté au moment où l'user essaye de naviguer fers la route à laquelle on a appliqué cet guard
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  // CanActivate, (deprecated)
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// pour injecter un service (service AuthService) dans un autre service (service AuthGuard) il faut ajouter le decorator @Injectable() et, on injecte le service dans le constructor() de l'autre service
@Injectable()
// export class AuthGuard (implements CanActivate - deprecated) {
export class AuthGuard {
  constructor(private authService: AuthService, private route: Router) {}

  // canActivate() est une méthode de @angular/router
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | any> | Promise<boolean | any> | boolean | any {
    if (this.authService.isAuth) {
      return true;
    } else {
      this.route.navigate(['/auth']);
    }
  }
}
