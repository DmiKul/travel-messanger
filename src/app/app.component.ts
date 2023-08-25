import { Component, Inject } from '@angular/core';
import { LoginService } from './api/services/login.service';
import { TuiNightThemeService } from '@taiga-ui/core';
// import { TuiDarkThemeService } from '@taiga-ui/core';
import { Observable } from 'rxjs';
import { DarkModeService } from './api/services/darkMode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'client';
  darkMode: boolean = false

  constructor(private loginService: LoginService, private darkModeService: DarkModeService) {
    this.darkModeService.get().subscribe(darkMode => {
      this.darkMode = darkMode
    })
  }
}
