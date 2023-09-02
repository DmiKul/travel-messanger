import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost, IUser } from '@customTypes/models';
import { UserDataService } from 'src/app/api/services/user-data.service';
import { UserPageComponent } from 'src/app/pages/user-page/user-page.component';
import * as _ from 'lodash'; // Импорт библиотеки Lodash для сортировки
import { NewPostService } from 'src/app/api/services/new-post.service';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.less']
})
export class PostFeedComponent {
  @Output() public deletedPostId = new EventEmitter<string>()
  // postIds: number[] = []
  avatar!: string;

  // posts: number[] = []
  posts: IPost[] = [];
  pageId!: string;
  isLoading: boolean = false;
  startIndex: number = 0;
  postsLimit: number = 5;
  allPostsCount: number = 0

  userId!: string
  userData!: IUser

  constructor(
    private userDataService: UserDataService,
    private http: HttpClient,
    private newPostService: NewPostService
  ) {
    this.userId = localStorage.getItem('userId') || ''
    this.pageId = this.userId; //todo: изменить хранение pageId

    // this.createPostComponent.getCreatedPost().subscribe( post => {
    //   console.log('newPost', post)
    //   if (post !== null) {
    //     this.posts.push(post)
    //     this.createPostComponent.resetCreatedPost()
    //   }
    // })

    // console.log(this.userPage.userData.posts)
    // this.posts = this.userPage.userData.posts

    // this.userDataService.get().subscribe( data => {
    //   this.posts = data.posts
    //   this.avatar = data.avatar
    // })
    // console.log('posts', this.posts)
    // console.log('avatar', this.avatar)
  }

  ngOnInit() {
    this.newPostService.get().subscribe( post => {
      console.log('newPost', post)
      if (post.id) {
        this.posts.unshift(post)
        console.log('push post')
        this.newPostService.reset()
      }
    })

    this.userDataService.get().subscribe((data) => {
      this.userData = data
      console.log('userData', data)
      this.allPostsCount = data.posts.length
    })
    this.getPosts()
  }

  getPosts() {
    console.log('posts length', this.posts.length)
    console.log('all posts count', this.allPostsCount)
    if (this.posts.length == this.allPostsCount || !this.allPostsCount || this.isLoading) {
      return
    }
    this.isLoading = true;
    const params = new HttpParams()
    .set('_sort', 'date')
    .set('_order', 'desc')
    .set('_start', this.startIndex)
    .set('_limit', this.postsLimit)
    this.http
      .get<IPost[]>(`http://localhost:3000/posts`, {
        params
        // params: {
        //   pageId: this.pageId,
        //   _sort: 'date',
        //   _order: 'desc',
        //   _start: this.startIndex,
        //   end: this.postsLimit
        // }
      })
      .subscribe((posts) => {
        console.log(posts);
        this.posts = this.posts.concat(posts);
        this.isLoading = false;
        this.startIndex += this.postsLimit;
      });
  }

  deletePost(id: string) {
    console.log('deletedPostId', id)
    this.posts = this.posts.filter( elem => elem.id !== id)
    --this.allPostsCount
    this.http.delete(`http://localhost:3000/posts/${id}`).subscribe( data => {
      console.log('post is deleted from db')
    })
    this.userData.posts = this.userData.posts.filter(elem => elem !== +id)
    console.log(this.userData)
    this.http.put(`http://localhost:3000/users/${this.userId}`, this.userData).subscribe( data => {
      console.log('delete post id')
    })
  }
}
