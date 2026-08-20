import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Home } from './home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: 'home',
    component: Home,
    canActivate: [authGuard]
  },

  {
    path: 'profile',
    component: Profile,
    canActivate: [authGuard]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'login'
  }

];