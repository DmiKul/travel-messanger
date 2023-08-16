import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/api/services/darkMode';

@Component({
  selector: 'app-theme-toggle-button',
  templateUrl: './theme-toggle-button.component.html',
  styleUrls: ['./theme-toggle-button.component.less']
})
export class ThemeToggleButtonComponent {
  isDarkTheme: boolean = false;

  constructor(private darkModeService: DarkModeService) {
    if (localStorage.getItem('darkMode')) {
      this.toggleTheme()
    }
  }

  public toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.darkModeService.set(this.isDarkTheme);
  }
}
