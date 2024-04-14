import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): Observable<boolean> {
    this.loggedIn = username === 'joel' && password === 'joel';
    return of(this.loggedIn);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}
