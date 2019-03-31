import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  SignInAsCustomer : boolean;
  SignInAsResAdmin : boolean;

  constructor( private authService: AuthService ){}

Customerform = new FormGroup({
  firstName: new FormControl('',[
    Validators.required
  ]),
  lastName: new FormControl('',[
    Validators.required
  ]),
  email: new FormControl('',[
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('',[
    Validators.required
  ]),
  repassword: new FormControl('',[
    Validators.required,

  ]),

  address: new FormControl('',[
    Validators.required,

  ]),
  restaurantName: new FormControl('',[
    Validators.required,

  ])

})


signIn(values){
console.log(values)
}

signInCustomer(){
  this.SignInAsCustomer = true;
  this.SignInAsResAdmin = false; 
}

signInRestOwner(){
  this.SignInAsCustomer = false;
  this.SignInAsResAdmin = true; 
}

signInASCustomer(data){
 this.authService.signInCustomer(data)
 .subscribe(res=>console.log(res))
}

signInAsRestOwner(data){
  this.authService.signInRestOwner(data)
  .subscribe(res => console.log(res))
}

}
