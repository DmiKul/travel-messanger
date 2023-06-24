import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { flatMap } from 'rxjs';
import { LoginService } from 'src/app/api/services/login.service';
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.less']
})
export class RegistrationPageComponent {
  form = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')

  });

  isFirstNameEmpty: boolean = false
  isLastNameEmpty: boolean = false
  isGenderEmpty: boolean = false
  isPhoneNumberEmpty: boolean = false
  isEmailEmpty: boolean = false
  isPasswordEmpty: boolean = false
  isConfirmPasswordEmpty: boolean = false


  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.loginService.setIsLoggedIn(false);
  }

  backToLogin(): void {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    console.log(this.form);

    this.isFirstNameEmpty = false
    this.isLastNameEmpty = false
    this.isGenderEmpty = false
    this.isPhoneNumberEmpty = false
    this.isEmailEmpty = false
    this.isPasswordEmpty = false
    this.isConfirmPasswordEmpty = false

    this.form.value.password = 'password'
    console.log(!this.form.value.password)

    if (!this.form.value['firstName']) {
      this.isFirstNameEmpty = true
    }
    if (!this.form.value['lastName']) {
      this.isLastNameEmpty = true
    }
    if (!this.form.value['gender']) {
      this.isGenderEmpty = true
    }
    if (!this.form.value['phoneNumber']) {
      this.isPhoneNumberEmpty = true
    }
    if (!this.form.value['email']) {
      this.isEmailEmpty = true
    }
    if (!this.form.value['password']) {
      this.isPasswordEmpty = true
    }
    if (!this.form.value['confirmPassword']) {
      this.isConfirmPasswordEmpty = true
    }
  }
}
