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

  isLoginEmpty: boolean = false
  isPasswordEmpty: boolean = false

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

    this.isLoginEmpty = false
    this.isPasswordEmpty = false

    if (!this.form.value.login) {
      this.isLoginEmpty = true
    }
    if (!this.form.value.password) {
      this.isPasswordEmpty = true
    }

    //проверка
    
    // this.router.navigate(['/profile']);
    // this.loginService.setIsLoggedIn(true);
  }
}
