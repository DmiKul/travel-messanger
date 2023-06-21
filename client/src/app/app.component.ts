import { Component } from '@angular/core';
import { LoginService } from './api/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'client';
  isLoggedIn!: boolean

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}