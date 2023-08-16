import { Component } from '@angular/core';

@Component({
  selector: 'app-post-control-bar',
  templateUrl: './post-control-bar.component.html',
  styleUrls: ['./post-control-bar.component.less']
})
export class PostControlBarComponent {
  isLiked: boolean = false
  isDisliked: boolean = false

  constructor() {
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
