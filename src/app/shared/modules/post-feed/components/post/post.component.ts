import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IPost, IUser } from '@customTypes/models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent {
  @Input() public postId!: number
  post!: IPost
  isLoading: boolean = true

  constructor(private http: HttpClient) {
    // console.log('postId ', this.postId)
    // this.http.get<IPost>(`http://localhost:3000/posts/${this.postId}`).subscribe( post => {
    //   this.post = post
    //   console.log('post', post)
    //   this.isLoading = false
    // })
  }

  ngOnInit() {
    console.log('postId ', this.postId)
    this.http.get<IPost>(`http://localhost:3000/posts/${this.postId}`).subscribe( post => {
      this.post = post
      console.log('post', post)
      this.isLoading = false
    })
  }
}

