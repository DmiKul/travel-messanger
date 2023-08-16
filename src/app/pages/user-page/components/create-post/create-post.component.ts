import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less']
})
export class CreatePostComponent {
  isShowed: boolean = false

  constructor() {}

  showOrHide() {
    //todo: проверка, что нет введенных данных(текста или файлов)
    this.isShowed = !this.isShowed
  }

}
