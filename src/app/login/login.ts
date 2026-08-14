import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  users= [
    {
      email:'user1@test.com',
      password:'1234'
    },
    {
      email:'user2@test.com',
      password: '5678'
    },
    {
      email:'user3@test.com',
      password: 'abcd'
    }
  ];
  constructor(private router: Router) {}

  login() {
    const matchedUser = this.users.find(
      user =>
        user.email === this.email &&
      user.password === this.password
    );

    if (matchedUser) {
      this.errorMessage = '';
      this.router.navigate(['/profile']);
    } else{
      this.errorMessage = 'Invalid email or password';
      
    }
    }
  }
