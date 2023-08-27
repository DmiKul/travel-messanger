import { Component, Input } from '@angular/core';
import { IPost, IUser } from '@customTypes/models';
import { UserDataService } from 'src/app/api/services/user-data.service';
import { UserPageComponent } from 'src/app/pages/user-page/user-page.component';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.less']
})
export class PostFeedComponent {
  posts: number[] = []
  avatar!: string

  // posts: number[] = []

  constructor(private userDataService: UserDataService) {
    // console.log(this.userPage.userData.posts)
    // this.posts = this.userPage.userData.posts
    this.userDataService.get().subscribe( data => {
      this.posts = data.posts
      this.avatar = data.avatar
    })
    console.log('posts', this.posts)
    console.log('avatar', this.avatar)
  }
}
