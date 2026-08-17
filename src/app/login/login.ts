import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';


@Component({

  selector: 'app-login',

  standalone: true,

  imports: [FormsModule],

  templateUrl: './login.html',

  styleUrl: './login.css'

})

export class Login {

  username = '';

  password = '';

  message = '';


  constructor(

    private http: HttpClient,

    private router: Router

  ) {}


  login() {

    const loginData = {

      username: this.username,

      password: this.password

    };


    this.http.post<any>(

      'http://localhost:3000/api/auth',

      loginData

    ).subscribe({

      next: (response) => {

        if (response.valid === true) {

          // Convert object into string and save it.
          localStorage.setItem(

            'currentUser',

            JSON.stringify(response)

          );


          this.message = 'Login successful';


          this.router.navigate(['/profile']);

        }

        else {

          this.message = 'Invalid username or password';

        }

      },


      error: (error) => {

        console.error(error);

        this.message = 'Could not connect to server';

      }

    });

  }

}