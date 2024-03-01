export class AuthService {
  // état d'authentification de l'user (par défaut: false)
  isAuth = false;

  // méthode de connexion del'user - simulation d'un appel http qui se résolve dans quelques sécondes (ici: 4s)
  signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 4000);
    });
  }

  // méthode de déconnexion de l'user
  signOut() {
    this.isAuth = false;
  }
}
