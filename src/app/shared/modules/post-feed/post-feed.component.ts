import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { IPost, IUser } from '@customTypes/models';
import { UserDataService } from 'src/app/api/services/user-data.service';
import { UserPageComponent } from 'src/app/pages/user-page/user-page.component';
import * as _ from 'lodash'; // Импорт библиотеки Lodash для сортировки


@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.less']
})
export class PostFeedComponent {
  // postIds: number[] = []
  avatar!: string;

  // posts: number[] = []
  posts: IPost[] = [];
  pageId!: string;
  isLoading: boolean = true;

  constructor(
    private userDataService: UserDataService,
    private http: HttpClient
  ) {
    this.pageId = localStorage.getItem('userId') || ''; //todo: изменить хранение pageId

    // console.log(this.userPage.userData.posts)
    // this.posts = this.userPage.userData.posts

    // this.userDataService.get().subscribe( data => {
    //   this.posts = data.posts
    //   this.avatar = data.avatar
    // })
    // console.log('posts', this.posts)
    // console.log('avatar', this.avatar)
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true;
    this.http
      .get<IPost[]>(
        `http://localhost:3000/posts`, {
          params: {
            pageId: this.pageId,
            _sort: 'date',
            _order: 'desc',
          }
        }
      )
      .subscribe((posts) => {
        console.log(posts);
        this.posts = posts;
        this.isLoading = false;
      });
  }
}
