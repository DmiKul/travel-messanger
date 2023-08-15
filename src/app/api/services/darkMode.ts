import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private darkModeSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  set(value: boolean): void {
    if (value) {
      document.documentElement.style.setProperty('--background-color', '#141414')
      document.documentElement.style.setProperty('--section-border-color', '#a3a0a04b')
      document.documentElement.style.setProperty('--section-background-color', '#222222')
      document.documentElement.style.setProperty('--header-background-color', '#222222')
    } else {
      document.documentElement.style.setProperty('--background-color', '#fff')
      document.documentElement.style.setProperty('--section-border-color', '#ece7e7')
      document.documentElement.style.setProperty('--section-background-color', '#fff')
      document.documentElement.style.setProperty('--header-background-color', '#fff')
    }
    this.darkModeSubject.next(value);

  }

  get(): BehaviorSubject<boolean> {
    return this.darkModeSubject;
  }
}
