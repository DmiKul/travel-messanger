import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IPost, IUser } from '@customTypes/models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent {
  @Input() public post!: IPost;

  constructor() {}

  ngOnInit() {
  }
}
