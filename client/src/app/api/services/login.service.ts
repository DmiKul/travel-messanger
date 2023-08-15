import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }


  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  setIsLoggedIn(value: boolean) {
    this.isLoggedInSubject.next(value);
  }
}
