import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/services/login.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/api/services/user-data.service';
import { IUser } from '@customTypes/models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  isFormSubmitted: boolean = false
  isLoginDataCorrect: boolean = true

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private http: HttpClient,
    private userDataService: UserDataService
  ) {
    this.loginService.setIsLoggedIn(false);
    this._createForm()
  }

  private _createForm(): void {
    this.loginForm = this.fb.group(
      {
        login: ['', [Validators.required]],
        password: ['', [Validators.required]],
        saveData: ['']
      },
    );
    this.loginForm.valueChanges.subscribe((v) => {
      this.isLoginDataCorrect = true
      this.isFormSubmitted = false;
    });
  }

  get _login() {
    return this.loginForm.get('login');
  }

  get _password() {
    return this.loginForm.get('password');
  }

  register() {
    this.router.navigate(['/register']);
  }

  onSubmit(): void {
    console.log(this.loginForm)
    this.isFormSubmitted = true
    if (this.loginForm.status == 'VALID') {
      const login: string = this._login?.value
      const password: string = this._password?.value
      this.http.get<IUser[]>('http://localhost:3000/users/').subscribe(data => {
        this.isLoginDataCorrect = data.some(user => {
          if (user.email === login && user.password === password) {
            this.userDataService.set(user)
            localStorage.setItem('userId', user.id)
            return true
          } else {
            return false
          }
        })
        if (this.isLoginDataCorrect) {
          this.router.navigate(['/profile']);
          this.loginService.setIsLoggedIn(true);
        }
      })
    }
  }
}
