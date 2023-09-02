import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost, IUser } from '@customTypes/models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent {
  @Input() public post!: IPost;
  @Output() public deletePostEvent = new EventEmitter<string>()

  constructor() {}

  ngOnInit() {
  }

  delete(id: string) {
    this.deletePostEvent.emit(id)
  }
}
