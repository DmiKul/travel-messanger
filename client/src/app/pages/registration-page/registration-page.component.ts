import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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
    gender: new FormControl('')
  });

  isFirstNameInvalid: boolean = false
  isLastNameInvalid: boolean = false
  isGenderInvalid: boolean = false
  isPhoneNumberInvalid: boolean = false
  isEmailInvalid: boolean = false


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

    this.isFirstNameInvalid = false
    this.isLastNameInvalid = false
    this.isGenderInvalid = false
    this.isPhoneNumberInvalid = false
    this.isEmailInvalid = false

    if (this.form.controls.firstName.status == 'INVALID') {
      this.isFirstNameInvalid = true
    }
    if (this.form.controls.lastName.status == 'INVALID') {
      this.isLastNameInvalid = true
    }
    if (this.form.controls.gender.status == 'INVALID') {
      this.isGenderInvalid = true
    }
    if (this.form.controls.phoneNumber.status == 'INVALID') {
      this.isPhoneNumberInvalid = true
    }
    if (this.form.controls.email.status == 'INVALID') {
      this.isEmailInvalid = true
    }
  }
}
