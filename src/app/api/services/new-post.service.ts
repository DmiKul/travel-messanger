import { Injectable } from '@angular/core';
import { IPhoto, IPost } from '@customTypes/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewPostService {

  defaultPost: IPost = {
    pageId: '',
    authorId: '',
    authorImg: '',
    authorFName: '',
    authorLName: '',
    photos: [],
    text: '',
    date: '',
    id: '',
    likes: 0,
    dislikes: 0,
    comments: [],
    reactions: []
  }
  post: BehaviorSubject<IPost> = new BehaviorSubject<IPost>(this.defaultPost)

  constructor() { }

  public get(): Observable<IPost> {
    return this.post
  }

  public set(value: IPost): void {
    this.post.next(value)
  }

  public reset(): void {
    this.post.next(this.defaultPost)
  }
}
