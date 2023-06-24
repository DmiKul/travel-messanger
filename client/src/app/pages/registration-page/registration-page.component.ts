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
  // testForm = new FormGroup({
  //   testValue: new FormControl('mail@mail.ru'),
  // });

  form = this.formBuilder.group({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl('')
  });

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
  }
}
