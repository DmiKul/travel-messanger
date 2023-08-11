import { Component, Input } from '@angular/core';
import { TuiNightThemeService } from '@taiga-ui/core';
import { DarkModeService } from '../api/services/darkMode';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  @Input() public isLoggedIn!: boolean
  isToggled: boolean = false

  constructor(private darkModeService: DarkModeService) {}

  toggleTheme(): void {
    this.isToggled = !this.isToggled
    this.darkModeService.set(this.isToggled)
  }
}
