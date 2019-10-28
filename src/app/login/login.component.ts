import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User;
  submitted = false;

  constructor() { 
    this.user = new User("test@gmail.com", "12345");
    this.submitted = false;
  }

  ngOnInit() {
  }

  submit(formData){
    console.log(this.user);
    //this.user = new User("test@gmail.com", "12345");
    this.submitted = true;
  }

}
