import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/services/login.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent {
  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.setIsLoggedIn(false);
  }

  backToLogin() {
    this.router.navigate(['/login'])
  }
}
