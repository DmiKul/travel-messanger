import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent {
  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });

  constructor(private router: Router) {}
  
  routerToLogin() {
    this.router.navigate(['/login'])
  }
}
