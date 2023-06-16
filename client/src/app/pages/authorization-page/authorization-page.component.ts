import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.less']
})
export class AuthorizationPageComponent {
  testForm = new FormGroup({
    testValue: new FormControl('mail@mail.ru'),
  });
}
