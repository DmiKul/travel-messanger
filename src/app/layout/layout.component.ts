import { Component, Input} from '@angular/core';
import { LoginService } from '../api/services/login.service';
import { Router } from '@angular/router';
import { UserDataService } from '../api/services/user-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  @Input() public isLoggedIn!: boolean;
  isToggled: boolean = false;
  avatar!: string

  constructor(private loginService: LoginService, private router: Router, private userDataService: UserDataService) {
    if (localStorage.getItem('userId')) {
      this.loginService.setIsLoggedIn(true)
      this.userDataService.get().subscribe( data => {
        this.avatar = data.avatar
      })
    }
    this.loginService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    })
    console.log(this.isLoggedIn)
  }

  logout(): void {
    this.loginService.setIsLoggedIn(false)
    localStorage.removeItem('userId')
    this.router.navigate(['login'])
  }

  toSettings(): void {

  }
}
