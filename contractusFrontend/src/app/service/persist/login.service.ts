import { Injectable } from '@angular/core';
import { LoginPersist } from '../../models/persist/loginpersist';

@Injectable({
  providedIn: 'root'
})
export class LoginPersistService {
  private isUserLoggedIn;
  public usserLogged:LoginPersist;
  userLogget: string;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user: LoginPersist) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    sessionStorage.setItem('currentUser', btoa(this.usserLogged.email));
  }

  getUserLoggedIn() {
    this.userLogget = sessionStorage.getItem('currentUser');
    return atob(this.userLogget);
  }
}
