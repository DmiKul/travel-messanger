import { Component } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/services/login.service';
import { emailDomainValidator } from './validators/emailDomainValidator';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent {
  registerForm!: FormGroup;
  isFormSubmitted: boolean = false;
  isEmailFree: boolean = true;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.loginService.setIsLoggedIn(false);
    this._createForm();
  }
  private _createForm(): void {
    this.registerForm = this.fb.group(
      {
        firstName: [
          '',
          [Validators.required] //todo: добавить валидатор (только буквы)
        ],
        lastName: ['', [Validators.required]], //todo: добавить валидатор (только буквы)
        phoneNumber: ['', [Validators.required]],
        email: [
          '',
          [Validators.required, Validators.email, emailDomainValidator()]
        ],
        gender: ['', [Validators.required]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordConfirm: ['', [Validators.required]]
      },
      {
        validators: [this.checkPasswords]
      }
    );
    this.registerForm.valueChanges.subscribe((v) => {
      this.isFormSubmitted = false;
      this.isEmailFree = true;
    });
  }

  get _firstName() {
    return this.registerForm.get('firstName');
  }

  get _lastName() {
    return this.registerForm.get('lastName');
  }

  get _phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get _email() {
    return this.registerForm.get('email');
  }

  get _gender() {
    return this.registerForm.get('gender');
  }
  get _password() {
    return this.registerForm.get('password');
  }

  get _passwordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }

  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('passwordConfirm')?.value;
    return pass === confirmPass || confirmPass == '' ? null : { notSame: true };
  };

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    console.log(this.registerForm);
    this.isFormSubmitted = true;


    if (this.registerForm.status == 'VALID') {
      //todo: проверка, нет ли уже такого пользователя
      const email: string = this._email?.value
      const password: string = this._password?.value

      const newUser = {
        id: '',
        email: email,
        password: password
      }
      this.http.get<any[]>('http://localhost:3000/users/').subscribe( data => {
        this.isEmailFree = !data.some(user => user.email === email)
      })
      if (this.isEmailFree) {
        this.http.post('http://localhost:3000/users/', newUser).subscribe(() => {
          console.log('add user')
        })
        this.router.navigate(['/login']);
      }
    }
  }
}
