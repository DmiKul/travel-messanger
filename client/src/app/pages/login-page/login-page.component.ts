import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru')
  });

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.setIsLoggedIn(false);
  }

  register() {
    this.router.navigate(['/register']);
  }

  login() {
    //проверка
    this.router.navigate(['/profile']);
    this.loginService.setIsLoggedIn(true);
  }
}
