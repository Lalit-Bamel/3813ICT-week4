import { Component } from '@angular/core';

import {

  Router,

  RouterLink,

  RouterOutlet

} from '@angular/router';


@Component({

  selector: 'app-root',

  standalone: true,

  imports: [

    RouterOutlet,

    RouterLink

  ],

  templateUrl: './app.html',

  styleUrl: './app.css'

})

export class App {

  constructor(private router: Router) {}


  logout() {

    // Remove logged-in user.
    localStorage.removeItem('currentUser');


    // Return to login.
    this.router.navigate(['/login']);

  }

}