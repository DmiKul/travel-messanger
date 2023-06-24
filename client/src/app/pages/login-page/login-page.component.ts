import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/services/login.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  form = this.formBuilder.group({
    login: new FormControl(''),
    password: new FormControl(''),
    saveData: new FormControl('')
  });

  isLoginInvalid: boolean = false
  isPasswordInvalid: boolean = false

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.loginService.setIsLoggedIn(false);
  }

  register() {
    this.router.navigate(['/register']);
  }

  onSubmit(): void {
    console.log(this.form.value);

    this.isLoginInvalid = false
    this.isPasswordInvalid = false

    if (this.form.controls.login.status == 'INVALID') {
      this.isLoginInvalid = true
    }
    if (this.form.controls.password.status == 'INVALID') {
      this.isPasswordInvalid = true
    }

    //проверка
    // this.router.navigate(['/profile']);
    // this.loginService.setIsLoggedIn(true);
  }
}
