import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';


@Component({

  selector: 'app-profile',

  standalone: true,

  imports: [FormsModule],

  templateUrl: './profile.html',

  styleUrl: './profile.css'

})

export class Profile implements OnInit {

  user: any = {

    username: '',

    birthdate: '',

    age: 0,

    email: '',

    valid: true

  };


  message = '';


  ngOnInit() {

    const storedUser =
      localStorage.getItem('currentUser');


    if (storedUser) {

      this.user = JSON.parse(storedUser);

    }

  }


  saveProfile() {

    localStorage.setItem(

      'currentUser',

      JSON.stringify(this.user)

    );


    this.message = 'Profile saved successfully';

  }

}