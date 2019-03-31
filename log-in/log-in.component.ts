import { AuthService } from './../services/auth.service';
import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from './contatct';
import { Router } from '@angular/router';

//import { SHARED_FORM_DIRECTIVES } from '@angular/forms/src/directives';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {

  invalidLogin: boolean;
  validLogin: boolean;

  constructor( private authService: AuthService,private router : Router ){}

form = new FormGroup({
  email: new FormControl('',[
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('',[
    Validators.required,
    ])
})

  logIn(credentials){
    //console.log(credentials);
    this.authService.login(credentials)
    .subscribe(result => {
      console.log(result.json());
      if(result.json().success){
        this.validLogin=true;
        this.router.navigate(['customerhome']);
      }

      else
        this.invalidLogin= true;
    })

    }
  }



