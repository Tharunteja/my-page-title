import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  redirectUrl;
  loggedInUser: String;
  invalidUser: boolean = false;

  constructor(private router: Router) {}

  auth(login: string, pass: string) {
    this.loggedInUser = login;
    //in real life case these needs to be
    //authenticated against the user and password in database by
    //making http call here
    if(login === 'typeA' && pass === 'password') {
      this.authenticated = true;
      this.router.navigate(['/main']);
    } else if(login === 'typeB' && pass === 'password') {
      this.authenticated = true;
      this.router.navigate(['/main']);
    }
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

}