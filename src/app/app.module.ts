import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
// importation de AuthService depuis son dossier
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
// import automatique
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes: Routes = [
  {
    path: 'appareils',
    canActivate: [AuthGuard],
    component: AppareilViewComponent,
  },
  {
    path: 'appareils/:id',
    canActivate: [AuthGuard],
    component: SingleAppareilComponent,
  },
  // ajout d'un nouveau path protégé par canActivate
  {
    path: 'edit',
    canActivate: [AuthGuard],
    component: EditAppareilComponent,
  },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    // ajout automatique
    EditAppareilComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  // injection de AuthService dans AppModule
  providers: [AppareilService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
