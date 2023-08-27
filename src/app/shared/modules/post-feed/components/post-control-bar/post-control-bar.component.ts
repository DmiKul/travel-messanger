import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/api/services/darkMode';

@Component({
  selector: 'app-post-control-bar',
  templateUrl: './post-control-bar.component.html',
  styleUrls: ['./post-control-bar.component.less']
})
export class PostControlBarComponent {
  isLiked: boolean = false
  isDisliked: boolean = false
  isDarkMode: boolean = false

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.get().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode
    })
    //todo: устанавливать значения лайка, дизлайка
  }

  like() {
    if (!this.isLiked) {
      this.isDisliked = false
    }
    this.isLiked = !this.isLiked
  }

  dislike() {
    if (!this.isDisliked) {
      this.isLiked = false
    }
    this.isDisliked = !this.isDisliked
  }
}
