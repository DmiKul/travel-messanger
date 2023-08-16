import { Component, Input} from '@angular/core';
import { LoginService } from '../api/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  @Input() public isLoggedIn!: boolean;
  isToggled: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  logout(): void {
    this.loginService.setIsLoggedIn(false)
    this.router.navigate(['login'])
  }

  toSettings(): void {

  }
}
