import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;
  private tokenKey = 'Joel';

  constructor() {
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem(this.tokenKey);
    if(!token){
      return of(false);
    } else {
      return of(true)
    }
  }

  login(usuario: string, password: string): boolean {
    if (usuario === 'joel' && password === 'joel') {
      localStorage.setItem(this.tokenKey, 'Joel');
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }


  get loggedIn(): boolean {
    return this.isLoggedIn;
  }
}
