import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  {path: '', redirectTo: 'landind', pathMatch: 'full'},
  {path: 'landind', component: LandingComponent}
];
