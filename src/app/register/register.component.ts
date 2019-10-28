import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User;
  registerSubmitted = false;

  constructor() { 
    this.user = new User("test@gmail.com", "12345");
    this.registerSubmitted = false;
  }

  ngOnInit() {
  }

  submit(formData){
    console.log(this.user);
    this.registerSubmitted = true;

  }

}
