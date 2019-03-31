import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import  { Contact } from '../log-in/contatct';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
 /*createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('Email:password'));
  }*/

  login(contact){
  let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.post('http://localhost:3000/api/login/',contact,{
      headers:this.headers
    });
  }

  signInCustomer(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/customers/',data,{
      headers:this.headers
    })
  }

  signInRestOwner(data){
    console.log(data)
    return this.http.post('http://localhost:3000/user/registerrestaurant',data,{
      headers:this.headers
    })
  }

}
